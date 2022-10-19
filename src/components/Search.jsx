import React, { useState } from "react";
import "./Search.css";

function Search(props) {
  const [city, setCity] = useState("");

  return (
    <div className="container-fluid ">
      <div className="row search-bar justify-content-center align-items-center">
        <div className=" search col-md-8">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input
            className="search-input  shadow-sm"
            id="cityDataList"
            placeholder="Search City"
            type="text"
            value={city}
            onChange={(event) => {
              const currentCity = event.target.value;
              setCity(currentCity);
            }}
          />
          <button
            className="btn btn-lg btn-dark search-btn"
            onClick={() => {
              props.handleClick(city);
              setCity("");
            }}
          >
            Search City
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
