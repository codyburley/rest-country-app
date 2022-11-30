import React from 'react';
import './Search.scss';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = () => {
  return (
    <section className='search'>
      <div className="search__container">
        <FontAwesomeIcon icon={faMagnifyingGlass} className='search__icon' />
        <input type="text" className="search__text" placeholder='Search for a country...' />
      </div>

    </section>
  )
}

export default Search