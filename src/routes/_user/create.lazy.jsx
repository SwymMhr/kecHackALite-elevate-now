import * as React from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import {
  Box,
  CircularProgress,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import { Grid2 } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import { post } from "@/lib/Databases";
import * as Yup from "yup";

export const Route = createLazyFileRoute("/_user/create")({
  component: RouteComponent,
});

function RouteComponent() {
  const initialValues = { title: "", description: "", price: "" };
  const { mutate } = useMutation({ mutationFn: post });
  const { enqueueSnackbar } = useSnackbar();
  const formSchema = Yup.object().shape({
    title: Yup.string("Invalid Title!").required("Required!"),
    description: Yup.string("Invalid Description!").required("Required"),
    price: Yup.string("Invalid Price!").required("Required"),
  });

  return (
    <Box
      sx={{
        width: "100%",
        border: "1px solid #f0f0f0",
        padding: "10px",
        borderRadius: "8px",
        marginBottom: "10px",
      }}
    >
      <Typography variant="h6">Create Fund</Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          setSubmitting(true);
          mutate(values, {
            onSettled: async () => {
              setSubmitting(false);
            },
            onSuccess: async () => {
              resetForm();
              enqueueSnackbar("Added Successfully!!!", {
                variant: "success",
              });
            },
            onError: async () => {
              enqueueSnackbar("Failed to Add", {
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
                  maxWidth: "100%",
                }}
              >

                <Grid2 container spacing={2}>
                  <Grid2 size={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Title"
                      id="title"
                      name="title"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
                      defaultValue={initialValues.title}
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
                      name="description"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                      id="description"
                      label="Description"
                      defaultValue={initialValues.description}
                      value={values.description}
                    />
                    {errors.password && touched.password && (
                      <Typography variant="body2" color="red">
                        {errors.description}
                      </Typography>
                    )}
                  </Grid2>
                  <Grid2 size={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="price"
                      id="price"
                      name="price"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                      defaultValue={initialValues.price}
                      value={values.price}
                    />
                    {errors.password && touched.password && (
                      <Typography variant="body2" color="red">
                        {errors.price}
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
                      Submit&nbsp;&nbsp;
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
  );
}
