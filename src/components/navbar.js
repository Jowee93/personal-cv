import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

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

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Jo Wee
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
