import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Box,
  Container,
  Button,
  Grid2,
  Typography,
  Grid,
  Stack,
} from "@mui/material";
import { CircularProgress } from "@mui/material";
import graphics from "/graphics.svg";
import { Link } from "@tanstack/react-router";
import { Divider } from "@mui/material";
// const Cards = React.lazy(() => import("@/components/Card/Cards"));

export const Route = createFileRoute("/")({
  component: Index,
  pendingComponent: () => (
    <Box
      sx={{
        width: "100%",
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  ),
});

function Index() {
  return (
    <React.Fragment>
      <Box
        sx={{
          padding: "30px 0",
          background: "#FF7F3E",
        }}
      >
        <Grid2 container spacing={2}>
          <Grid2
            item
            size={{
              xs: 12,
              sm: 12,
              md: 6,
            }}
          >
            <Box
              sx={{
                padding: "40px 80px",
              }}
            >
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{
                  color: "#FFF6E9",
                }}
              >
                Empowering Local Business
              </Typography>
              <Box>
                <Typography
                  variant="h1"
                  fontWeight={800}
                  sx={{
                    color: "#FFF6E9",
                  }}
                >
                  Elevate
                </Typography>
                <Typography
                  variant="h1"
                  fontWeight={800}
                  sx={{
                    color: "#FFF6E9",
                  }}
                >
                  Now
                </Typography>
              </Box>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ paddingTop: "20px", color: "#FFF6E9" }}
              >
                Elevate Your Sell, Elevate Your Business, Elevate Your Life
              </Typography>
              <Link to="/register">
                <Button
                  variant="contained"
                  sx={{
                    mt: 5,
                    backgroundColor: "#FFF6E9",
                    color: "black",
                    fontSize: "20px",
                    padding: "10px 40px",
                    borderRadius: "30px",
                  }}
                >
                  Register
                </Button>
              </Link>
            </Box>
          </Grid2>
          <Grid2
            item
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
          >
            <Box
              sx={{
                background: "primary.main",
              }}
            >
              <img src={graphics} alt="graphics" />
            </Box>
          </Grid2>
        </Grid2>
      </Box>
      <Container>
        <Box
          sx={{
            padding: "40px 0",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom fontWeight={800}>
            Why Elevate Now?
          </Typography>
          <Typography variant="body1" gutterBottom>
            Elevate Now is a platform that connects local businesses with
            customers. We empower local businesses to reach more customers and
            grow their business. Our platform is designed to help local
            businesses succeed in the digital age.
          </Typography>
        </Box>
        <Box
          sx={{
            paddingTop: "40px",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{
              paddingBottom: "100px",
              paddingTop: "20px",
            }}
            fontWeight={800}
          >
            Our Services
          </Typography>

          <Stack
            spacing={2}
            direction="row"
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "100px",
              }}
            >
              <img src="/consulting.png" alt="consulting" width="100%" />
              <Typography
                variant="h6"
                align="center"
                component="h2"
                gutterBottom
                sx={{
                  paddingTop: "20px",
                }}
              >
                Consulting
              </Typography>
              
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box
              sx={{
                width: "100px",
                m: "auto",
              }}
            >
              <img src="/training.png" alt="marketing" width="100%" />
              <Typography
                variant="h6"
                align="center"
                component="h2"
                gutterBottom
                sx={{
                  paddingTop: "20px",
                }}
              >
                Training
              </Typography>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box
              sx={{
                width: "100px",
                ml: "auto",
              }}
            >
              <img src="/customer.png" alt="feedback" width="100%" />
              <Typography
                variant="h6"
                align="center"
                component="h2"
                gutterBottom
                sx={{
                  paddingTop: "20px",
                }}
              >
                Feedback
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Container sx={{
          padding: "80px 0",
        }}>
            <Stack
            direction={{ xs: "column", sm:"row", md: "row" }}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
            spacing={6}
            >
            <Box
                id="about"
                sx={{
                  padding: "40px 0",
                }}>
                  <Typography algin="left" variant="h4" component="h2" gutterBottom fontWeight={800}>
                    About Us
                  </Typography>
                  <Typography variant="body1" sx={{
                    lineHeight: "2",
                    letterSpacing: ".7px",
                  }} gutterBottom>
                    Elevate Now is a platform that connects local businesses with customers. We empower local businesses to reach more customers and grow their business. Our platform is designed to help local businesses succeed in the digital age.
                  </Typography>
                </Box>
              <Box sx={{
                width: "100%",
              }}>
              <img src="/about.jpg" width="100%" alt="about" />
              </Box>
            </Stack>
        </Container>
      </Container>
    </React.Fragment>
  );
}
