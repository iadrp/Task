import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { Paper } from "@mui/material";
import AccountMenu from "./AccountMenu";
import { Link } from "react-router-dom";

const Navbar = ({ handleOnClick }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "space-between",
        }}
        component={Paper}
      >
        <Box>
          <Link to="/">
            <Typography
              sx={{ minWidth: 100, cursor: "pointer", display: "inline-block" }}
            >
              Contact
            </Typography>
          </Link>
          <Link to="/profile">
            <Typography
              sx={{ minWidth: 100, cursor: "pointer", display: "inline-block" }}
            >
              Profile
            </Typography>
          </Link>
        </Box>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
        <AccountMenu
          handleClick={handleClick}
          handleClose={handleClose}
          open={open}
          anchorEl={anchorEl}
          handleOnClick={handleOnClick}
        />
      </Box>
    </>
  );
};

export default Navbar;
