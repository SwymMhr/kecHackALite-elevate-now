import {
  Box,
  Button,
  CircularProgress,
  Grid2,
  TextField,
  Typography,
} from '@mui/material'
import { createLazyFileRoute, Link} from '@tanstack/react-router'
import { Formik } from 'formik'
import logo from '/logo.png'
import * as Yup from 'yup'

import { useMutation } from '@tanstack/react-query'
import { useAuth } from '@/lib/Auth'
import { useSnackbar } from 'notistack'

const SignupSchema = Yup.object().shape({
  email: Yup.string('Invalid Email!').required('Required!'),
  password: Yup.string().min(8, 'Too Short!').required('Required'),
})

export const Route = createLazyFileRoute('/(auth)/login')({
  component: RouteComponent,
  pendingComponent: () => {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress />
      </Box>
    )
  },
})

function RouteComponent() {
  const { loginAccount, storeUser, getSessionKey } = useAuth()
  // using useMutation hook to invoke createAccount async function which will return promise
  const { mutate } = useMutation({ mutationFn: loginAccount })

  // for setting alert notifications
  const { enqueueSnackbar } = useSnackbar()

  // initial values for forms
  const initialValues = {
    email: '',
    password: '',
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          console.log('Values', values)
          setSubmitting(true)
          mutate(values, {
            onSettled: async () => {
              setSubmitting(false)
            },
            onSuccess: async (data) => {
              resetForm()
              enqueueSnackbar('Authenticated Successfully!!!', {
                variant: 'success',
              })
              setTimeout(()=>{
                window.location.href="/dashboard"
              },1000)
            },
            onError: async () => {
              enqueueSnackbar('Failed to Authenticated', {
                variant: 'error',
              })
            },
          })
        }}
      >
        {({
          values,
          touched,
          errors,
          handleChange,
          handleSubmit,
          handleBlur,
          isSubmitting,
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  p: '1rem',
                  maxWidth: '350px',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img src={logo} alt="logo" style={{ width: '200px' }} />
                </Box>
                <Typography
                  variant="h5"
                  align="center"
                  sx={{ paddingBottom: '1.4rem' }}
                >
                  Login
                </Typography>

                <Grid2 container spacing={2}>
                  <Grid2 size={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Email"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      defaultValue={initialValues.email}
                      disabled={isSubmitting}
                    />
                    {errors.email && touched.email && (
                      <Typography variant="body2" color="red">
                        {errors.email}
                      </Typography>
                    )}
                  </Grid2>
                  <Grid2 size={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Password"
                      id="password"
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={initialValues.password}
                      value={values.password}
                      disabled={isSubmitting}
                    />
                    {errors.password && touched.password && (
                      <Typography variant="body2" color="red">
                        {errors.password}
                      </Typography>
                    )}
                  </Grid2>
                  <Grid2 size={12}>
                    <Link to="/recover">
                      <Typography align="right" sx={{ textDecoration: 'none' }}>
                        Forgot Password?
                      </Typography>
                    </Link>
                  </Grid2>
                  <Grid2 size={12}>
                    <Button
                      variant="contained"
                      type="submit"
                      fullWidth
                      sx={{
                        marginBottom: '1rem',
                        fontSize: '1rem',
                      }}
                    >
                      Login&nbsp;&nbsp;
                      {isSubmitting && (
                        <CircularProgress color="white" size={25} />
                      )}
                    </Button>
                  </Grid2>
                </Grid2>
              </Box>
            </form>
          )
        }}
      </Formik>
    </Box>
  )
}
