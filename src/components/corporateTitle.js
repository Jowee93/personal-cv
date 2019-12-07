import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import buildingImage from "../components/building-bg.jpg";

const useStyle = makeStyles(theme => ({
  root: {
    height: "25vh",
    backgroundImage: `url(${buildingImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundAttachment: "fixed",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontFamily: "Alegreya SC, serif",
    color: "white"
  }
}));

export default function CorporateTitle() {
  const classes = useStyle();

  return (
    <Box className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        RISK AND GOVERNANCE
      </Typography>
      <Typography variant="h3" className={classes.title}>
        CONSULTANT
      </Typography>
    </Box>
  );
}
