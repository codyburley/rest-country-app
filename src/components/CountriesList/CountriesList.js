import React from 'react';
import { useSelector } from 'react-redux';
import CountryCard from '../CountryCard/CountryCard';
import './CountriesList.scss';

const CountriesList = ({ searchTerm, regionFilter }) => {
  const { countries } = useSelector(state => state.countryList)

  return (
    <section className='countries-list'>
      {countries.filter((val) => {

        if (regionFilter !== '' && searchTerm !== '') {
          return val.region.toLocaleLowerCase().includes(regionFilter.toLocaleLowerCase()) && (val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
        } else if (regionFilter !== '') {
          return val.region.toLocaleLowerCase().includes(regionFilter.toLocaleLowerCase())
        }

        if (searchTerm === "") {
          return val
        } else if (val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
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