import React, { useEffect, useState } from "react";
import axios from "axios";
import SimpleCard from "./CurrentCard";
import WeaklyCard from "./WeaklyCard";
import Location from './Location';
import "../index.css"

const Current = () => {
  const [currentWeather, setcurrentWeather] = useState({
    city: "",
    country: "",
    day: "",
    morningTemp: "",
    dayTemp: "",
    eveningTemp: "",
    nightTemp: "",
    description: "",
    population: "",
    iconSrc: "",
    sunrise: "",
    sunset: "",
    humidity: "",
    pressure: "",
    speed: "",
  });
  const apiKey = "d94bcd435b62a031771c35633f9f310a";

  useEffect(() => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDate = new Date();
    const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
      months[currentDate.getMonth()]
    }`;

    async function getCurrent() {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast/daily?q=Delhi&units=metric&cnt=7&appid=${apiKey}`
       
      );
 console.log(response)
      setcurrentWeather({
        city: response.data.city.name,
        country: response.data.city.country,
        morningTemp: response.data.list[0].temp.morn,
        dayTemp: response.data.list[0].temp.day,
        eveningTemp: response.data.list[0].temp.eve,
        nightTemp: response.data.list[0].temp.night,
        day: date,
        iconSrc: response.data.list[0].weather[0].icon,
        population: response.data.city.population,
        description: response.data.list[0].weather[0].description,
        sunrise: new Date(response.data.list[0].sunrise * 1000)
          .toLocaleTimeString()
          .slice(0, 4),
        sunset: new Date(response.data.list[0].sunset * 1000)
          .toLocaleTimeString()
          .slice(0, 4),
        humidity: 26,
        pop: 0,
        pressure: 1016,
        speed: 1.09,
      });
    }
    getCurrent();
  }, []);

  const time = new Date();
  const cTime = time.getHours();
  console.log(time.getHours());
  const newformat = time.getHours() >= 12 ? "PM" : "AM";
  console.log(newformat);
  console.log(currentWeather.eveningTemp);

  const getTemp = () => {
    if (cTime > 4 && cTime < 12 && newformat === "AM") {
      return currentWeather.morningTemp;
    } else if (cTime >= 12 && cTime <= 18 && newformat === "PM") {
      return currentWeather.dayTemp;
    } else if (cTime > 18 && cTime < 21 && newformat === "PM") {
      return currentWeather.eveningTemp;
    } else {
      return currentWeather.nightTemp;
    }
  };

  return (
    <>
      {currentWeather.city ? (
        <div className="row ">
        <div className="col-sm-6 ml-3">
          <Location 
              today={currentWeather.day}
              City={currentWeather.city}
              country={currentWeather.country}
              population={currentWeather.population}
              sunrise={currentWeather.sunrise}
              sunset={currentWeather.sunset}  
              />
        </div>
          <div className="col-sm-6 ml-3" style={{marginBottom:'200px'}}>
            <SimpleCard
              
              imgSrc={currentWeather.iconSrc}
              mornTimetemp={currentWeather.morningTemp}
              dayTimetemp={getTemp()}
              description={currentWeather.description}
             

              humidity={currentWeather.humidity}
              pressure={currentWeather.pressure}
              speed={currentWeather.speed}
            />
          </div>  
          <div className="col-sm-4 ml-4" style={{ position:"relative",top:"-190px",boxShadow:"5px 5px 12px #fff"}}>
            <WeaklyCard name="Delhi" />
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Current;
