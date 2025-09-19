import React from "react";

const Country = ({ country }) => {
  console.log(country);

  return (
    <div>
      <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <h3>Official Name: {country.name.official}</h3>
      <h3>Area: {country.area.area}</h3>
      <h3>Capital: {country.capital.capital[0]}</h3>
      <h3>Region: {country.region.region}</h3>
      <h3>Population: {country.population.population}</h3>
    </div>
  );
};

export default Country;
