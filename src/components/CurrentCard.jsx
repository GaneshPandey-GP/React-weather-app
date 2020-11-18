import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import pressure from "../images/pressure.svg";
import humidity from "../images/humidity.svg";
import wind from "../images/windspeed.png";

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
    fontSize: 40,
    fontWeight: 900,
  },
  description: {
    fontWeight: 900,
    color: "#000",
    fontSize: "30px",
  },
  pos: {
    marginTop: 1,
  },
  icon_1: {
    width: 30,
    height: 30,
    alignSelf: "center",
    marginRight: 4,
    marginLeft: 20,
    //background:"black",
  },
  unit__icon1: {
    width: 22,
    height: 22,
    alignSelf: "center",
    fontSize: "20",
    marginTop: "12",
  },
  temp: {
    fontWeight: 600,
    textAlign: "left",
    color: "green",
  },
  sunrise_sunset: {
    float: "right",
    marginTop: -15,
  },

  main: {
    marginTop: 10,
    textAlign: "left",
  },
  span: {
    color: "#222",
    fontWeight: "bold",
  },
  psh: {
    display: "flex",
    flexDirection: "column",
    padding: "12px",
    borderTop: "1px solid gray",
    borderRadius: "12px",
  },
});

export default function SimpleCard(probs) {
  const classes = useStyles();

  const description = probs.description;
  console.log(description);

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <div className="row">
            <div className="col-sm-6">
              <div className={classes.main}>
                <img
                  src={`https://openweathermap.org/img/w/${probs.imgSrc}.png`}
                  width="100"
                  height="100"
                  alt="icon"
                />
                <Typography
                  className={classes.title}
                  color="textPrimary"
                  gutterBottom
                >
                  {probs.dayTimetemp}°C
                </Typography>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.description}
                >
                  {probs.description}
                </Typography>

                <Typography variant="body2" component="p"></Typography>
              </div>
            </div>

            <div className="col-sm-6 mt-2 pt-3">
              <div className={classes.psh}>
                <img
                  src={pressure}
                  alt="Logo"
                  className={classes.unit__icon1}
                />
                <span className={classes.span}>{probs.pressure} hPa</span>
                <br />
                <img
                  src={humidity}
                  alt="Logo"
                  className={classes.unit__icon1}
                />
                <span className={classes.span}>{probs.humidity} %</span>
                <br />
                <img src={wind} alt="Logo" className={classes.unit__icon1} />
                <span className={classes.span}>{probs.speed} m/s N</span>
                <br />
              </div>
            </div>
          </div>
        </CardContent>
        <CardContent />
      </Card>
    </div>
  );
}
