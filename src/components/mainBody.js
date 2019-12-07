import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import dog from "../components/dog-portrait.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center"
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    color: theme.palette.text.secondary,
    height: "85vh",
    fontFamily: "Alegreya SC, serif"
  },
  paperLeft: {
    backgroundImage: `url(${dog})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed"
  },
  paperRight: {
    backgroundImage: `url(${dog})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed"
  },
  box: {
    fontSize: "100%",
    border: "1px solid black",
    position: "absolute",
    top: 165,
    width: "30vw"
  },
  button: {
    // top: "65vh",
    fontFamily: "Alegreya SC, serif"
  },
  slogan: {
    fontFamily: "Alegreya SC, serif"
  },
  textbox: {
    width: "20vw"
  }
}));

export default function MainBody() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Paper className={`${classes.paper} ${classes.paperLeft}`}>
            <Box component="div">
              <h2 style={{ color: "white" }}>CORPORATE</h2>
            </Box>
            <Box component="div" className={classes.textbox}>
              <Typography style={{ color: "white" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aperiam sunt non, fugit dolor laborum
              </Typography>
            </Box>
            <Box component="div">
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Get Started
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={`${classes.paper} ${classes.paperRight} img-fluid`}>
            <Box component="div">
              <h2 style={{ color: "white" }}>CREATIVE</h2>
            </Box>
            <Box component="div" className={classes.textbox}>
              <Typography style={{ color: "white" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aperiam sunt non, fugit dolor laborum
              </Typography>
            </Box>
            <Box component="div">
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Get Started
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Box className={classes.box} component="div">
        <Typography
          style={{ color: "white" }}
          variant="h6"
          className={classes.slogan}
        >
          I Believe In Perspective
        </Typography>
      </Box>
    </div>
  );
}
