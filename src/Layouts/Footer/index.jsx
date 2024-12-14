import {
  Box,
  Container,
  Divider,
  Grid2,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
const Footer = () => {
  return (
    <Box
      sx={{
        background: "#01311e",
        color: "white",
        padding: "20px",
        marginTop: "50px",
      }}
    >
      <Container>
        <Box>
          <Grid2 container spacing={2}>
            <Grid2
              size={{
                sm: 12,
                md: 4,
                xs: 12,
              }}
            >
              <Typography variant="h5" align="left" color="#fff"
              sx={{
                marginBottom: "5px",
                padding: "15px",
              }}
              >
                Company
              </Typography>
              <List
                sx={{
                  padding: 0,
                }}
              >
                <ListItem>
                  <ListItemText primary="Contact Us" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="FAQ" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Terms and Conditions" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Privacy Policy" />
                </ListItem>
              </List>
            </Grid2>
            <Grid2
              size={{
                sm: 12,
                md: 4,
                xs: 12,
              }}
            >
                <Typography variant="h5" align="center" color="#fff"
              sx={{
                marginBottom: "5px",
                padding: "15px",
              }}
              >
                Quick Links
              </Typography>
              <List
                sx={{
                  padding: 0,
                }}
              >
                <ListItem>
                  <ListItemText align="center" primary="Contact Us" />
                </ListItem>
                <ListItem>
                  <ListItemText align="center" primary="FAQ" />
                </ListItem>
                <ListItem>
                  <ListItemText align="center" primary="Terms and Conditions" />
                </ListItem>
                <ListItem>
                  <ListItemText align="center" primary="Privacy Policy" />
                </ListItem>
              </List>
            </Grid2>
            <Grid2
              size={{
                sm: 12,
                md: 4,
                xs: 12,
              }}
            >
                <Typography variant="h5" align="right" color="#fff"
              sx={{
                marginBottom: "5px",
                padding: "15px",
              }}
              >
                Contact
              </Typography>
              <List
                sx={{
                  padding: 0,
                }}
              >
                <ListItem>
                  <ListItemText align="right" primary="Kathmandu, Nepal" />
                </ListItem>
                <ListItem>
                  <ListItemText align="right" primary="+977-9800000001" />
                </ListItem>
                <ListItem>
                  <ListItemText align="right" primary="info@example.com" />
                </ListItem>
              </List>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
      <Box sx={{ textAlign: "center", padding: "5px" }}>
        <Divider />
        <Typography variant="body2" align="center" color="#fff" sx={{
          padding: "10px",
        }}>
          © 2021 ElevateNow. All Rights Reserved.
        </Typography>
        </Box>
    </Box>
  );
};

export default Footer;
