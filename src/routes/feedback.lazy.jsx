import { Box, Container, Typography } from "@mui/material";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Formik } from "formik";
import { TextField, Button, CircularProgress } from "@mui/material";
import { useSnackbar } from "notistack";
import { Grid2 } from "@mui/material";
import logo from "/logo.png";
import * as Yup from "yup";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { shops } from "@/lib/Databases/shop";
export const Route = createLazyFileRoute("/feedback")({
  component: RouteComponent,
});

function RouteComponent() {
  const { enqueueSnackbar } = useSnackbar();
  const initialValues = {
    shoplist: "",
    description: "",
  };

  const formSchema = Yup.object().shape({
    list: Yup.string().required("Required!"),
    description: Yup.string().required("Required!"),
  });

  return (
    <Container
      sx={{
        padding: "30px 0",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        marginTop: "10px",
      }}
    >
      <Box
        sx={{
          border: "1px solid #f0f0f0",
          marginBottom: "10px",
          borderRadius: "8px",
          padding: "10px",
          justifyContent: "center",
          alignItems: "center",
          width: "400px",
        }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={formSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log("Values", values);
            setSubmitting(true);
            enqueueSnackbar("Submitted Successfully!!!", {
              variant: "success",
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
                    maxWidth: "350px",
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
                  <Typography variant="h6" align="center">
                    Feedback
                  </Typography>

                  <Grid2 container spacing={2}>
                    <Grid2 size={12}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Shop Name
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={values.shoplist}
                          label="Shop Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="shoplist"
                          defaultValue={initialValues.shoplist}
                          disabled={isSubmitting}
                        >
                          {shops.map((shop, index) => {
                            return (
                              <MenuItem key={index} value={shop.ShopName}>
                                {shop.ShopName}
                              </MenuItem>
                            );
                          }
                          )}
                        </Select>
                      </FormControl>
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
                        label="Feedback"
                        id="description"
                        name="description"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.description}
                        defaultValue={initialValues.description}
                        disabled={isSubmitting}
                        sx={{
                          marginBottom: "1rem",
                        }}
                      />
                      {errors.email && touched.email && (
                        <Typography variant="body2" color="red">
                          {errors.email}
                        </Typography>
                      )}
                    </Grid2>
                    <Grid2 size={12}>
                      <Button
                        variant="contained"
                        type="submit"
                        fullWidth
                        sx={{
                          marginBottom: "1rem",
                          fontSize: "1rem",
                        }}
                      >
                        Submit Feedback&nbsp;&nbsp;
                        {isSubmitting && (
                          <CircularProgress color="white" size={25} />
                        )}
                      </Button>
                    </Grid2>
                  </Grid2>
                </Box>
              </form>
            );
          }}
        </Formik>
      </Box>
    </Container>
  );
}
