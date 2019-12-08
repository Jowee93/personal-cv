import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
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
  },
  cardContent: {
    fontFamily: "Alegreya SC, serif"
  }
}));

export default function ExperienceCorporate() {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <ThemeProvider theme={theme}>
            <Typography variant="h3" className={classes.title}>
              EXPERIENCE
            </Typography>
          </ThemeProvider>
        </Grid>
      </Grid>

      <Timeline lineColor={"#ddd"}>
        <TimelineItem
          key="001"
          dateText="MAY 2018 – SEP 2019"
          style={{ color: "#e86971" }}
          dateInnerStyle={{ background: "#61b8ff", color: "#000" }}
          bodyContainerStyle={{
            background: "#ddd",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)"
          }}
        >
          <h3 className={classes.cardContent} style={{ marginBottom: "10px" }}>
            PRICEWATERHOUSECOOPER RISK ASSURANCE SERVICES
          </h3>
          <h5 className={classes.cardContent} style={{ marginBottom: "10px" }}>
            CONSULTANT
          </h5>
          <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex
            nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
            magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia
            irure reprehenderit laborum fugiat dolore in elit. Adipisicing do
            qui duis Lorem est.
          </p>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="JAN 2016 - APR 2018"
          dateInnerStyle={{ background: "#61b8ff", color: "#000" }}
          bodyContainerStyle={{
            background: "#ddd",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)"
          }}
        >
          <h3 className={classes.cardContent} style={{ marginBottom: "10px" }}>
            PRICEWATERHOUSECOOPER
          </h3>
          <h5 className={classes.cardContent} style={{ marginBottom: "10px" }}>
            SENIOR ASSOCIATE
          </h5>
          <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex
            nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
            magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia
            irure reprehenderit laborum fugiat dolore in elit. Adipisicing do
            qui duis Lorem est.
          </p>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
