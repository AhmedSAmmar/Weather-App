import React from "react";
import "./Weather.css";

function Weather(props) {
    
    const {main , wind , weather :[{icon , main : description }]} = props.weather;
    
    return (
        <div className="container-fluid weather-row ">
            <div className="row justify-content-center  ">
                <div className="card col-lg-4 col-md-6 weather-card ">
                    <div className="card-body">
                        <h2 className="card-title">{props.weather.name}</h2>
                        <h1 className="card-subtitle text-center">{main.temp}°</h1>
                        <p className="card-text text-center weather-desc">{description}</p>
                        <p className="card-text text-center"><img className="icon-img" src={"http://openweathermap.org/img/wn/"+ icon +"@2x.png"}/></p>
                        <h5 className="card-text">Weather Conditions</h5>
                        <ul>
                            <li><i className="fas fa-wind"></i>  {wind.speed}</li>
                            <li><i className="fas fa-exclamation-circle"></i>  {`${main.pressure} hPa`}</li>
                            <li><i className="fas fa-tint"></i>  {`${main.humidity} %`}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather
