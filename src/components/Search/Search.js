import './Search.scss';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = ({ setSearchTerm, setRegionFilter, regionFilter }) => {

  const handleClick = country => {
    if (regionFilter === country) {
      setRegionFilter('')
    } else {
      setRegionFilter(country)
    }
  };

  return (
    <section className='search'>
      <form className="search__container">
        <FontAwesomeIcon icon={faMagnifyingGlass} className='search__icon' />
        <input
          type="text"
          className="search__text"
          placeholder='Search for a country...'
          onChange={(event) => { setSearchTerm(event.target.value) }}
        />
      </form>

      <div className="search__filter">
        <span className='search__filter-copy'>Filter by Region</span>
        <FontAwesomeIcon icon={faChevronDown} className='search__chevron' />
        <div className="search__menu">
          <ul>
            <li
              className={`search__region ${regionFilter === 'africa' ? ' search__region--active' : ''}`}
              onClick={() => handleClick('africa')}>
              Africa
            </li>
            <li
              className={`search__region ${regionFilter === 'america' ? ' search__region--active' : ''}`}
              onClick={() => handleClick('america')}>
              America
            </li>
            <li
              className={`search__region ${regionFilter === 'asia' ? ' search__region--active' : ''}`}
              onClick={() => handleClick('asia')}>
              Asia
            </li>
            <li
              className={`search__region ${regionFilter === 'europe' ? ' search__region--active' : ''}`}
              onClick={() => handleClick('europe')}>
              Europe
            </li>
            <li
              className={`search__region ${regionFilter === 'oceania' ? ' search__region--active' : ''}`}
              onClick={() => handleClick('oceania')}>
              Oceania
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Search