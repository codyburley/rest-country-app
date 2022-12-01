import React from 'react';
import './CountryCard.scss';

const CountryCard = ({ name, population, region, capital, flags }) => {
  return (
    <article className='country-card'>
      <img className='country-card__flag' src={flags.svg} alt={`${name} flag`} />
      <div className='country-card__container'>
        <h2 className='country-card__title'>{name}</h2>
        <p className='country-card__copy'><span className='country-card__copy--bolding'>Population: </span>{population.toLocaleString()}</p>
        <p className='country-card__copy'><span className='country-card__copy--bolding'>Region: </span>{region}</p>
        <p className='country-card__copy'><span className='country-card__copy country-card__copy--bolding'>Capital: </span>{capital}</p>
      </div>
    </article>
  )
}

export default CountryCard