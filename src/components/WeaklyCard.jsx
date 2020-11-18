import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import axios from "axios";
import { CardMedia } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    background: "transparent",
  },
  gridList: {
    marginTop: "121px",
    borderTop: "2px solid yellow",
    width: 500,
    height: 450,
    padding: 10,
    "&::-webkit-scrollbar": {
      width: "0.4em",
      marginTop: "2px",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      borderRadius: "12px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgb(187, 97, 199)",
      borderRadius: "15px",
    },
  },

}));

export default function WeaklyCard(probs) {
  const classes = useStyles();
  const [weakWeather, setweakWeather] = useState([]);
  const apiKey = "d94bcd435b62a031771c35633f9f310a";
  useEffect(() => {
    async function getWeaklyWeather() {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast/daily?q=${probs.name}&units=metric&cnt=7&appid=${apiKey}`
      );
      setweakWeather(response.data.list);
    }
    getWeaklyWeather();
  }, [probs.name]);
  return (
    <>
      <CardMedia className={classes.root}>
        <GridList cellHeight={200} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
            <h4
              className="text-center text-capitalize font-weight-bold "
              style={{
                color: "#c5afdb",
                textShadow: "2px 3px 6px #000000",
                fontSize: "30px",
              }}
            >
              7 Days forecast
            </h4>
          </GridListTile>
          {weakWeather.map((value, index) => (
            <div className="week_card mt-2" key={index}>
              <GridListTile>
                <div
                  className="card text-capitalize "
                  style={{
                    width: "15rem",
                    height:"200px",
                    fontSize: "10px",
                    background: "transparent",
                  }}
                >
             
                 <div className="font-weight-bold mt-1 mr-2 ml-2 ">
                     {(index !== 0) ?<h5 className="day">
                      {new Date(value.dt * 1000)
                        .toLocaleString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                        .slice(0, 3)}
                    </h5>:<h5 className="day">Today</h5> }
                  </div>
                  
                  <div className="card-body"><img
                    src={`https://openweathermap.org/img/w/${value.weather[0].icon}.png`}
                    width="70"
                    height="70"
                    alt={value.weather[0].icon}
                  />
                  <h3 className="min_max">
                      {value.temp.min} -  {value.temp.max} °C
                    </h3>
                    <h3 className="description">
                      {value.weather[0].description}
                    </h3>
                    
                  </div>
                </div>
              </GridListTile>
            </div>
          ))}
        </GridList>
      </CardMedia>
    </>
  );
}
