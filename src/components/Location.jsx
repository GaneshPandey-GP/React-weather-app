import React from "react";
//import sunrise from "../src/images/sunrise.svg";
import sunrise from "../images/sunrise.svg"
import sunset from "../images/sunset.svg";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 265,
    textAlign: "center",
    marginLeft: 60,
    marginRight: 60,
    borderRadius: 10,
    boxShadow: "5px 5px 10px #fff",
    margin: 10,
    background: "transparent",
  },

  title: {
    fontSize: 30,
    fontWeight: 800,
  },
  
  icon_1: {
    width: 30,
    height: 30,
    alignSelf: "center",
    marginRight: 4,
    marginLeft: 20,
    //background:"black",
  },
  temp: {
    fontWeight: 600,
    textAlign: "center",
    color: "green",
  },
  sunrise_sunset: {
    float: "right",
    marginTop: -15,
  },
  sunset: {
    float: "right",
  },
  main: {
    marginTop: 10,
    textAlign: "center",
  },
  weather: {
    color: "red",
    //
  },
});
const Location = (probs) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
          variant="h5"
          component="h2"
        >
          {probs.City},{probs.country}
        </Typography>

        <Typography variant="h5" component="h2">
          {probs.today}
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          className={classes.temp}
        ></Typography>

        <div className="mt-3">
          <CardContent>
            <div className={classes.sunrise_sunset}>
              <Typography variant="h6" component="p" gutterBottom>
                <img src={sunset} alt="sunrise" className={classes.icon_1} />
                {probs.sunset} PM
              </Typography>
            </div>
            <div className={classes.sunrise_sunset}>
              <Typography variant="h6" component="p" gutterBottom>
                <img src={sunrise} alt="sunrise" className={classes.icon_1} />
                {probs.sunrise} AM
              </Typography>
            </div>
          </CardContent>
        </div>
      </CardContent>
    </Card>
  );
};
export default Location;
