import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    display: "flex",
    justifyContent: "flex-start",
    fontFamily: "Alegreya SC, serif"
  },
  navbar: {
    backgroundColor: "black"
  }
}));

export default function NavbarCorporate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h5"
            className={classes.title}
            color="inherit"
          >
            Jo Wee
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
