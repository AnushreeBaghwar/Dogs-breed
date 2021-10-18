import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import { makeStyles } from "@mui/styles";
import paws from "./../paws.png";
import hello from "./../hello.png";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  backgroundColor: "#fff1db",
  "@media all": {
    minHeight: 128,
  },
}));

function Navbar(props) {
  const useStyles = makeStyles(() => ({
    menu: {
      color: "red",
    },
  }));
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon className={classes.menu} />
          </IconButton>
          <img src={hello} alt="" height="70" width="80" />
          <img src={paws} alt="" height="70" width="80" />
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, alignSelf: "flex-end" }}
          >
            {" "}
          </Typography>
          <IconButton size="large" aria-label="search" color="inherit">
            <SearchIcon className={classes.menu} />
          </IconButton>
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <MoreIcon className={classes.menu} />
          </IconButton>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
