import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider
} from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import dog from "../components/dog-portrait.jpg";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

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
    height: "90vh",
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
    position: "absolute",
    top: 165,
    width: "30vw"
  },
  button: {
    fontFamily: "Alegreya SC, serif"
  },
  text: {
    fontFamily: "Alegreya SC, serif",
    color: "white"
  },
  textbox: {
    width: "40vw"
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
              <ThemeProvider theme={theme}>
                <Typography variant="h3" className={classes.text}>
                  CORPORATE
                </Typography>
              </ThemeProvider>
            </Box>
            <Box component="div" className={classes.textbox}>
              <ThemeProvider theme={theme}>
                <Typography variant="h6" className={classes.text}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aperiam sunt non, fugit dolor laborum
                </Typography>
              </ThemeProvider>
            </Box>
            <Box component="div">
              <Button
                component={Link}
                to="/corporate"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                <ThemeProvider theme={theme}>
                  <Typography variant="h6" className={classes.text}>
                    Get Started
                  </Typography>
                </ThemeProvider>
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={`${classes.paper} ${classes.paperRight} img-fluid`}>
            <Box component="div">
              <ThemeProvider theme={theme}>
                <Typography variant="h3" className={classes.text}>
                  CREATIVE
                </Typography>
              </ThemeProvider>
            </Box>
            <Box component="div" className={classes.textbox}>
              <ThemeProvider theme={theme}>
                <Typography variant="h6" className={classes.text}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aperiam sunt non, fugit dolor laborum
                </Typography>
              </ThemeProvider>
            </Box>
            <Box component="div">
              <Button
                component={Link}
                to="/creative"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                <ThemeProvider theme={theme}>
                  <Typography variant="h6" className={classes.text}>
                    Get Started
                  </Typography>
                </ThemeProvider>
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Box className={classes.box} component="div">
        <ThemeProvider theme={theme}>
          <Typography className={classes.text} variant="h4">
            I Believe In Perspective
          </Typography>
        </ThemeProvider>
      </Box>
    </div>
  );
}
