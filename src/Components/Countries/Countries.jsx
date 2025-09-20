import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountries = (country) => {
    // console.log(newVisitedCountry);
    const newVisitedCountry = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountry);
  };

  const handleVisitedFlags = (flag) => {
    const newVisitedFlag = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlag);
  };
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  return (
    <div>
      <h1>In The Countries: {countries.length}</h1>
      <h2>Total Country Visited: {visitedCountries.length}</h2>
      <h2>Total Flags Visited: {visitedFlags.length}</h2>
      <ol className="text">
        {visitedCountries.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>
      <div className="visited-flag">
        {visitedFlags.map((flag, index) => (
          <img key={index} src={flag}></img>
        ))}
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
