import { Box, Button, Link, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const UnAuthorized = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h1" style={{ color: "white" }}>
        You have not access to see this page
      </Typography>
      <Typography sx={{ mt: "20px" }} variant="h5" style={{ color: "white" }}>
        Please Log as a Super Admin
      </Typography>
      <Button sx={{ mt: "20px" }} variant="contained" color="secondary">
        <Link href="/login" underline="hover">
          Login
        </Link>
      </Button>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ mt: "20px" }} variant="h5" style={{ color: "#ccc" }}>
          Or Go Back
        </Typography>
        <Button
          sx={{ ml: "10px", mt: "17px" }}
          variant="outlined"
          color="success"
          onClick={goBack}
        >
          Back
        </Button>
      </Box>
    </Box>
  );
};

export default UnAuthorized;
