import {
  Box,
  Button,
  CircularProgress,
  Grid2,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,

  Typography,
} from "@mui/material";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Formik } from "formik";
import logo from "/logo.png";
import * as Yup from "yup";

import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@/lib/Auth";
import { useSnackbar } from "notistack";

const SignupSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastname: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string("Invalid Email!").required("Required!"),
  password: Yup.string().min(8, "Too Short!").required("Required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  phone: Yup.string().min(10).max(10).required("Required"),
});

export const Route = createLazyFileRoute("/(auth)/register")({
  component: RouteComponent,
  pendingComponent: () => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  },
});

function RouteComponent() {
  const { createAccount } = useAuth();
  // using useMutation hook to invoke createAccount async function which will return promise
  const { mutate } = useMutation({ mutationFn: createAccount });

  //
  const { enqueueSnackbar } = useSnackbar();

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    userType: "",
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          setSubmitting(true);
          mutate(values, {
            onSettled: async () => {
              setSubmitting(false);
            },
            onSuccess: async () => {
              resetForm();
              enqueueSnackbar("Account created successfully!!!", {
                variant: "success",
              });
            },
            onError: async () => {
              enqueueSnackbar("Account creation failed", {
                variant: "error",
              });
            },
          });
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
                  p: "1rem",
                  maxWidth: "550px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={logo} alt="logo" style={{ width: "200px" }} />
                </Box>
                <Typography
                  variant="h5"
                  align="center"
                  sx={{ paddingBottom: "1.4rem" }}
                >
                  Create New Account
                </Typography>

                <Grid2 container spacing={2}>
                  <Grid2
                    size={{
                      sm: 12,
                      xs: 12,
                      md: 6,
                    }}
                  >
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="First Name"
                      id="firstname"
                      name="firstname"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={initialValues.firstname}
                      value={values.firstname}
                      disabled={isSubmitting}
                    />
                    {errors.firstname && touched.firstname && (
                      <Typography variant="body2" color="red">
                        {errors.firstname}
                      </Typography>
                    )}
                  </Grid2>
                  <Grid2
                    size={{
                      sm: 12,
                      xs: 12,
                      md: 6,
                    }}
                  >
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Last Name"
                      id="lastname"
                      name="lastname"
                      onChange={handleChange}
                      disabled={isSubmitting}
                      onBlur={handleBlur}
                      defaultValue={initialValues.lastname}
                      value={values.lastname}
                    />
                    {errors.lastname && touched.lastname && (
                      <Typography variant="body2" color="red">
                        {errors.lastname}
                      </Typography>
                    )}
                  </Grid2>
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
                  <Grid2
                    size={{
                      sm: 12,
                      xs: 12,
                      md: 12,
                    }}
                  >
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Phone"
                      id="phone"
                      name="phone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={initialValues.phone}
                      value={values.phone}
                      disabled={isSubmitting}
                    />
                    {errors.phone && touched.phone && (
                      <Typography variant="body2" color="red">
                        {errors.phone}
                      </Typography>
                    )}
                  </Grid2>
                  <Grid2
                    size={{
                      sm: 12,
                      xs: 12,
                      md: 12,
                    }}
                  >
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel id="userType">
                          User Type
                        </InputLabel>
                        <Select
                          labelId="userType"
                          id="userType"
                          value={values.userType}
                          defaultValue={initialValues.userType}
                          label="userType"
                          name="userType"
                          onChange={handleChange}
                        >
                          <MenuItem value="lbo">Local Business Owner</MenuItem>
                          <MenuItem value="expert">Expert</MenuItem>
                          <MenuItem value="dsp">Digital Solution Provider</MenuItem>
                          <MenuItem value="investors">Investors</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid2>
                  <Grid2
                    size={{
                      sm: 12,
                      xs: 12,
                      md: 6,
                    }}
                  >
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
                  <Grid2
                    size={{
                      sm: 12,
                      xs: 12,
                      md: 6,
                    }}
                  >
                    <TextField
                      type="password"
                      fullWidth
                      variant="outlined"
                      label="Confirm Password"
                      id="confirmPassword"
                      name="confirmPassword"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={initialValues.confirmPassword}
                      value={values.confirmPassword}
                      disabled={isSubmitting}
                    />
                    {errors.confirmPassword && touched.confirmPassword && (
                      <Typography variant="body2" color="red">
                        {errors.confirmPassword}
                      </Typography>
                    )}
                  </Grid2>
                </Grid2>
                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  sx={{
                    marginTop: "1rem",
                    marginBottom: "1rem",
                    fontSize: "1rem",
                  }}
                >
                  Signup&nbsp;&nbsp;
                  {isSubmitting && <CircularProgress color="white" size={25} />}
                </Button>
              </Box>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
}
