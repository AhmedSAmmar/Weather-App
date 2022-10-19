import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Weather from "./components/Weather";
import axios from "axios";


function App() {
  const [weather, setWeather] = useState("");
  const [error, setError] = useState(false);
  
  

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=cairo&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }, []);

  function handleClick(currentCity) {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then(function (response) {
        console.log("api fetched");
        setWeather(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        alert("City Not Found");
      });
  }

  return (
    <div className="app">
      <Search handleClick={handleClick} />
      {weather !== "" && <Weather weather={weather} />}
    </div>
  );
}

export default App;

{
  /* <SearchBar handleClick={handleClick}/>
      {weather !== '' && <WeatherCard weather={weather}/>} */
}
