import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider
} from "@material-ui/core/styles";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(5)
  },
  title: {
    textAlign: "center",
    fontFamily: "Alegreya SC, serif",
    color: "white"
  }
}));

export default function MyJourneyCorporate() {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <ThemeProvider theme={theme}>
            <Typography variant="h3" className={classes.title}>
              My Journey
            </Typography>
          </ThemeProvider>
        </Grid>
      </Grid>
    </div>
  );
}
