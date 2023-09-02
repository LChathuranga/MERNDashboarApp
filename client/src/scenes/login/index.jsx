import { Copyright } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "state/api";
import { setUserCredentials } from "state";

const Login = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const loggedData = await login({
      email: data.get("email"),
      password: data.get("password"),
    }).unwrap();
    if (loggedData) {
      dispatch(setUserCredentials({ ...loggedData }));
      navigate('/dashboard');
    }
  };
  return (
    <>
      <Box
        container
        component="main"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CssBaseline />
        <Grid item xs={12} sm={12} md={12} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    <Typography
                      sx={{ color: theme.palette.secondary[600] }}
                      variant="h6"
                    >
                      Forgot password?
                    </Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    <Typography
                      sx={{ color: theme.palette.secondary[600] }}
                      variant="h6"
                    >
                      {"Don't have an account? Sign Up"}
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
