import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
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
  },
  navbarWrapper: {
    display: "flex",
    justifyContent: "space-between"
  },
  navbarSection: {
    flexGrow: 0.3,
    display: "flex",
    justifyContent: "space-between"
  }
}));

export default function NavbarCorporate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar className={classes.navbarWrapper}>
          <Typography
            component={Link}
            to="/"
            variant="h5"
            className={classes.title}
            color="inherit"
          >
            Jo Wee
          </Typography>
          <Box className={classes.navbarSection}>
            <Typography variant="h6" className={classes.title} color="inherit">
              Experience
            </Typography>
            <Typography variant="h6" className={classes.title} color="inherit">
              Education
            </Typography>
            <Typography variant="h6" className={classes.title} color="inherit">
              Skills
            </Typography>
            <Typography variant="h6" className={classes.title} color="inherit">
              Contact
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
