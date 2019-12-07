import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

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
  },
  expertiseCard: {
    height: "35vh",
    padding: theme.spacing(2),
    margin: theme.spacing(1)
  },
  cardContentHeader: {
    color: "black",
    fontFamily: "Alegreya SC, serif",
    margin: theme.spacing(2),
    marginBottom: theme.spacing(4)
  },
  cardContentBody: {
    color: "black",
    fontFamily: "Alegreya SC, serif",
    margin: theme.spacing(2),
    fontSize: "1.3rem"
  },
  primary: {
    fontSize: "7rem"
  }
}));

export default function ExpertiseCorporate() {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <ThemeProvider theme={theme}>
            <Typography variant="h3" className={classes.title}>
              EXPERTISE
            </Typography>
            <Grid item xs={12} className={classes.root}>
              <Grid item xs={4}>
                <Paper className={classes.expertiseCard}>
                  <Typography
                    variant="h4"
                    className={classes.cardContentHeader}
                  >
                    Governance, Risk and Compliance (GRC)
                  </Typography>
                  <Typography
                    variant="body1"
                    className={classes.cardContentBody}
                  >
                    Providing risk and compliance services including framework
                    implementation and digitilization of processes
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.expertiseCard}>
                  <Typography
                    variant="h4"
                    className={classes.cardContentHeader}
                  >
                    Project Management <br /> Office
                  </Typography>
                  <Typography
                    variant="body1"
                    className={classes.cardContentBody}
                  >
                    Leading business solutions implementation projects including
                    ERP projects using agile approach
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.expertiseCard}>
                  <Typography
                    variant="h4"
                    className={classes.cardContentHeader}
                  >
                    Accounting <br /> Advisory
                  </Typography>
                  <Typography
                    variant="body1"
                    className={classes.cardContentBody}
                  >
                    Providing accounting advisory according to IFRS and training
                    covering financial institutions
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </ThemeProvider>
        </Grid>
      </Grid>
    </div>
  );
}
