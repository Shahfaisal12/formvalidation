import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ background: "#FFFFFF", color: "#000000", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            Orders
          </Typography>
          <IconButton aria-label="Example" sx={{m: 1}}>
            <SearchOutlinedIcon />
          </IconButton>
          <Link to="/mycart" >
          <IconButton aria-label="Example" sx={{m: 1}}>
            <AddShoppingCartSharpIcon />
          </IconButton>
          </Link>

          <Avatar
            alt="Remy Sharp"
            src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
            sx={{m: 2}}/>
          <Fab size="small" color="primary" aria-label="add"  sx={{m: 1}}>
            <AddIcon />
          </Fab>
        </Toolbar>
      </AppBar>
    </Box>
    {/* <div style={{ width: "100%", background: "#F1F1F1" }}>
    <Typography
      variant="h5"
      align="center"
      sx={{ fontWeight: "bold", mb: 2, py: 1 }}
    >
      {title}
    </Typography>
  </div> */}
    </>
  );
};

export default Header;
