import React from "react";
import "./Country.css";

const Country = ({ country }) => {
  const handleVisited = () => {
    
  };

  return (
    <div className="country">
      <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
      <div className="title">
        <h3>Name: {country.name.common}</h3>
        <h3>Official Name: {country.name.official}</h3>
        <h3>
          Area: {country.area.area}{" "}
          {country.area.area > 300000 ? "Big Country" : "Small Country"}
        </h3>
        <h3>Capital: {country.capital.capital[0]}</h3>
        <h3>Region: {country.region.region}</h3>
        <h3>Population: {country.population.population}</h3>
        <button onClick={handleVisited}>Not Visited</button>
      </div>
    </div>
  );
};

export default Country;
