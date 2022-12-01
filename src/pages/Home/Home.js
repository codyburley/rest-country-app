import React, { useState } from 'react';
import CountriesList from '../../components/CountriesList/CountriesList';
import Search from '../../components/Search/Search';
import './Home.scss';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState('');

  return (
    <main className='home'>
      <Search
        setSearchTerm={setSearchTerm}
        setRegionFilter={setRegionFilter}
      />
      <CountriesList
        searchTerm={searchTerm}
        regionFilter={regionFilter}
      />
    </main>
  )
}

export default Home