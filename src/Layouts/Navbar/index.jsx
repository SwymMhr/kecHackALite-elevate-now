import * as React from "react";
import {
  AppBar,
  Box,
  Container,
  Button,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
  Drawer,
  useScrollTrigger,
  Stack,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { Link } from "@tanstack/react-router";
import { useAuth } from "@/lib/Auth";
// import logo from "/logo.png";

const navigationMenus = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Feedback",
    link: "/feedback",
  },
  {
    label: "About",
    link: "/#about"
  },
  {
    label: "Contact",
    link: "/#contact"
  }
];

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  
  const trigger = useScrollTrigger({
    disableHysteresis: false,
    threshold: 0,
  });

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container =
    window !== undefined ? () => window.document.body : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        
            <Typography variant="h6" color="black">
              ElevateNow
            </Typography>

      </Box>
      <Divider />
      <List>
        {Array.from(navigationMenus).map((menu) => (
          <ListItem key={menu.label} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                primary={
                  <Link to={menu.link}>
                    <Button
                      sx={{
                        color: "black",
                        width: "100%",
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                    >
                      {menu.label}
                    </Button>
                  </Link>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {isAuthenticated() ? (
        <Stack
          direction="column"
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            to="/login"
            sx={{
              display: "block",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                ml: 2,
                borderRadius: "2px",
                color: "black",
              }}
            >
              Login
            </Button>
          </Link>
          <Link to="/register" sx={{ display: "block" }}>
            <Button
              variant="contained"
              sx={{
                ml: 2,
                borderRadius: "2px",
              }}
            >
              Sign Up
            </Button>
          </Link>
        </Stack>
      ) : (
        <Stack
          direction="column"
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            to="/login"
            sx={{
              display: "block",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                ml: 2,
                borderRadius: "2px",
                color: "black",
              }}
            >
              Account
            </Button>
          </Link>
          <Button
            variant="contained"
            sx={{
              ml: 2,
              borderRadius: "2px",
            }}
            onClick={() => {
              logout();
            }}
          >
            Log Out
          </Button>
        </Stack>
      )}
    </Box>
  );

  return (
    <Box>
      <AppBar
        position="static"
        component="nav"
        sx={{
          backgroundColor: "#FF7F3E",
          color: trigger ? "black" : "white",
          boxShadow: trigger ? "0px 0px 10px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <Container>
          <Toolbar disableGutters>
            <Box>
                <Typography variant="h5" color="white"
                sx={{
                  fontWeight: "bold",
                  textDecoration: "none"
                }}
                >
                  ElevateNow
                </Typography>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { md: "none" },
                color: "white",
                ml: "auto",
              }}
            >
              <Menu />
            </IconButton>
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                ml: "auto",
              }}
            >
              {navigationMenus.map((menu) => {
                return (
                  <Link key={menu.label} to={menu.link}>
                    <Button sx={{ color: "white" }}>{menu.label}</Button>
                  </Link>
                );
              })}
              {isAuthenticated() ? (
                <>
                  <Link to="/dashboard">
                    <Button
                      variant="contained"
                      sx={{
                        ml: 2,
                        borderRadius: "2px",
                        backgroundColor: "white",
                        color: "black",
                      }}
                    >
                      Account
                    </Button>
                  </Link>
                  <Button
                    onClick={() => {
                      logout();
                    }}
                    variant="contained"
                    sx={{
                      ml: 2,
                      borderRadius: "2px",
                      backgroundColor: "white",
                      color: "black",
                    }}
                  >
                    LogOut
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button
                      variant="contained"
                      sx={{
                        ml: 2,
                        borderRadius: "2px",
                        backgroundColor: "white",
                        color: "black",
                      }}
                    >
                      Login
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button
                      variant="contained"
                      sx={{
                        ml: 2,
                        borderRadius: "2px",
                        backgroundColor: "white",
                        color: "black",
                      }}
                    >
                      Register
                    </Button>
                  </Link>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 240,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar;
