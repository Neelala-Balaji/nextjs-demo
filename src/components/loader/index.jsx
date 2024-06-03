import React from "react";
import { CircularProgress, Box } from "@mui/material";

const Loader = ({ loading }) => {
  if (!loading) return null;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        backgroundColor: "rgba(255, 255, 255, 0.7)",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;