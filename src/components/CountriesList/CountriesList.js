import React from 'react';
import { useSelector } from 'react-redux';
import CountryCard from '../CountryCard/CountryCard';
import './CountriesList.scss';

const CountriesList = ({ searchTerm, regionFilter }) => {
  const { countries } = useSelector(state => state.countryList)
  console.log(countries)

  return (
    <section className='countries-list'>
      {countries.filter((val) => {
        // If empty, return the whole list
        if (searchTerm === "") {
          return val
        } else if (
          // If search matches any fields, return that data
          val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
          return val
        }
        return false;
      }).map((country, i) => {
        return <CountryCard
          key={i}
          {...country}
        />
      })}
    </section>
  )
}

export default CountriesList