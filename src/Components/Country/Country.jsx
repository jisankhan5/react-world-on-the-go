import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
  const [visited, setVisited] = useState(false);

  // console.log(handleVisitedCountries);

  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
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
        <h3>Population: {country.population.population} People</h3>
        <button onClick={handleVisited}>
          {visited ? "Visited" : "Not Visited"}
        </button>
        <button
          onClick={() => {
            handleVisitedFlags(country?.flags?.flags?.png);
          }}
        >
          Add Visited Flag
        </button>
      </div>
    </div>
  );
};

export default Country;
