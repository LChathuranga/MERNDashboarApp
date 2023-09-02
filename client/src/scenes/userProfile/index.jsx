import { Box, Typography } from '@mui/material';
import React from 'react'

const UserProfile = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 80px)",
      }}
    >
      <Typography variant="h1" style={{ color: "white" }}>
        This is User Profile page
      </Typography>
    </Box>
  );
}

export default UserProfile