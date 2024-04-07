import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { useAuth } from "../components/Auth";
import { useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Homework NT
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme({
  palette: {
    background: {
      default: "#f5f5f5",
    },
  },
});

export default function Profile() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <Dashboard>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <Paper
            sx={{
              backgroundColor: "white",

              px: [5],
            }}
          >
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
              <Typography component="h1" variant="h5">
                Your profile
              </Typography>
              <Typography pt={5} variant="h6">
                Username: {user.username}
              </Typography>
              <Typography pt={2} variant="h6">
                Password: {user.password}
              </Typography>
            </Box>
            <Button
              onClick={handleLogout}
              fullWidth
              color="error"
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
            >
              Log out
            </Button>
          </Paper>
        </Container>
      </ThemeProvider>
    </Dashboard>
  );
}
