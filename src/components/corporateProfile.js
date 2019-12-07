import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import dog from "../components/dog-portrait.jpg";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles(theme => ({
  root: {},
  cardImg: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(4),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(0),
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    height: "40vh",
    backgroundImage: `url(${dog})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center"
  },
  cardContent: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(4),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(0),
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    height: "40vh"
  },
  cardText: {
    margin: theme.spacing(6)
  },
  cardIcon: {
    margin: theme.spacing(6),
    display: "flex",
    justifyContent: "space-between",
    width: "10vw"
  }
}));

export default function CorporateProfile() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={5}>
          <Card className={classes.cardImg}></Card>
        </Grid>
        <Grid item xs={7}>
          <Card className={classes.cardContent}>
            <ThemeProvider theme={theme}>
              <Typography
                variant="h4"
                className={classes.cardText}
                style={{ fontWeight: "bold" }}
              >
                YEAP JO WEE
              </Typography>
              <Typography variant="h6" className={classes.cardText}>
                Born: 11.12.1993 | Age: 26
              </Typography>
              <Typography variant="h6" className={classes.cardText}>
                Residence: 10-2 Challis Damansara, PJU 3/30
              </Typography>
              <Typography variant="h6" className={classes.cardIcon}>
                <LinkedInIcon />
                <FacebookIcon />
                <InstagramIcon />
              </Typography>
            </ThemeProvider>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
