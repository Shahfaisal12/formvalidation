import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div style={{height:'80vh', display:'flex'}}>
      <Box sx={{m:'auto', width:'70vw'}}>
      <Typography
        variant="h1"
        align="center"
        sx={{ fontWeight: "bold", mb: 3 }}
        >
        404
        </Typography>
      <Typography align="center" variant="h5" sx={{fontWeight: "bold", mb: 3 }}>
        Sorry! Page Not Found
      </Typography>
      <Typography align="center" variant="subtitle1" sx={{mb: 3 }}>
        Sorry this content has been moved Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Earum, amet perferendis, nemo facere
        excepturi quis.
        </Typography>
        <div align="center">
         <Link to="/" style={{ textDecoration: "none", color: "#000000" }}> <Button variant="outlined">GO TO HOME PAGE</Button></Link>
        </div>
        </Box>
        
        </div>
  );
};

export default PageNotFound;
