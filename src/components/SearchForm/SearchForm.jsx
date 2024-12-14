import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { Formik } from "formik";
import * as Yup from "yup";
const validationSchema = {
  shift: Yup.string().required("Shift is required"),
  eventDate: Yup.string().required("Event Date is required"),
  guests: Yup.string().required("Guests is required"),
  eventType: Yup.string().required("Event Type is required"),
};
const SearchForm = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const initialValues = {
    shift: "",
    eventDate: "",
    guests: "",
    eventType: "",
    page: 1,
  };
  return (
    <Box
      sx={{
        backgroundColor: "rgba(255, 255,255, 1)",
        padding: pathname !== "/" ? "1rem 0 1rem 0" : "2rem",
        borderRadius: "10px",
        mb: pathname !== "/" ? "0" : "2rem",
        mt: pathname !== "/" ? "0" : "2rem",
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object(validationSchema)}
        onSubmit={(values, { setSubmitting }) => {
          // the navigate function will navigate to search page with the search query
          if (!Object.is(initialValues, values)) {
            navigate({
              to: "/search",
              search: values,
            });
          } else {
            setSubmitting(false);
            console.log("No search query");
          }
        }}
      >
        {({
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => {
          return (
            <FormGroup>
              <Stack
                spacing={{
                  xs: 2,
                  md: 0,
                }}
                direction={{
                  sm: "column",
                  md: "row",
                }}
              >
                <FormControl fullWidth>
                  <InputLabel id="shift">Shift</InputLabel>
                  <Select
                    disabled={isSubmitting}
                    labelId="shift"
                    id="shift"
                    name="shift"
                    label="Shift"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    defaultValue={values.shift ?? ""}
                    sx={{
                      borderRadius: "0",
                      borderTopLeftRadius: { xs: "3px", md: "6px" },
                      borderBottomLeftRadius: { xs: "3px", md: "6px" },
                      backgroundColor: "white",
                      minWidth: "180px",
                    }}
                    required
                  >
                    <MenuItem value="morning">Morning</MenuItem>
                    <MenuItem value="afternoon">Afternoon</MenuItem>
                    <MenuItem value="evening">Evening</MenuItem>
                  </Select>
                </FormControl>
                <OutlinedInput
                  disabled={isSubmitting}
                  id="eventDate"
                  name="eventDate"
                  placeholder="Date"
                  type="date"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  defaultValue={values.eventDate ?? ""}
                  fullWidth
                  sx={{
                    borderRadius: "0",
                    backgroundColor: "white",
                    minWidth: "180px",
                  }}
                />
                <TextField
                  disabled={isSubmitting}
                  id="guests"
                  name="guests"
                  label="Estimated Guests"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  defaultValue={values.guests ?? ""}
                  fullWidth
                  sx={{
                    borderRadius: "0",
                    backgroundColor: "white",
                    minWidth: "180px",
                    outline: "none",
                  }}
                />
                <FormControl fullWidth>
                  <InputLabel id="type">Event Type</InputLabel>
                  <Select
                    labelId="Event Type"
                    disabled={isSubmitting}
                    id="eventType"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    defaultValue={values.eventType ?? ""}
                    label="eventType"
                    name="eventType"
                    placeholder="Event Type"
                    sx={{
                      borderRadius: "0",
                      borderTopRightRadius: { xs: "3px", md: "0" },
                      borderBottomRightRadius: { xs: "3px", md: "0" },
                      backgroundColor: "white",
                      minWidth: { xs: "180px", sm: "200px" },
                    }}
                  >
                    <MenuItem value="wedding">Wedding</MenuItem>
                    <MenuItem value="birthday">Birthday</MenuItem>
                    <MenuItem value="anniversary">Anniversary</MenuItem>
                    <MenuItem value="events">Corporate Events</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>
                <Button
                  variant="contained"
                  fullWidth
                  disabled={isSubmitting}
                  sx={{
                    marginTop: "1rem",
                    borderRadius: "0",
                    borderTopRightRadius: { xs: "3px", md: "6px" },
                    borderBottomRightRadius: { xs: "3px", md: "6px" },
                  }}
                  type="submit"
                  onClick={handleSubmit}
                >
                  Check Availability &nbsp;&nbsp;
                  {isSubmitting && <CircularProgress color="white" size={20} />}
                </Button>
              </Stack>
              {(errors.shift && touched.shift) ||
              (errors.eventDate && touched.eventDate) ||
              (errors.guests && touched.guests) ||
              (errors.eventType && touched.eventType) ? (
                <Typography
                  variant="caption"
                  sx={{
                    color: "red",
                    display: "block",
                  }}
                >
                  Please fill in all fields
                </Typography>
              ) : null}
            </FormGroup>
          );
        }}
      </Formik>
    </Box>
  );
};

export default SearchForm;
