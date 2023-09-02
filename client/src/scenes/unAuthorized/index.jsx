import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const UnAuthorized = () => {

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h1" style={{ color: "white" }}>
        UnAuthorized
      </Typography>
    </Box>
  );
};

export default UnAuthorized;
