import React, { useEffect, useState } from 'react';
import './Country.scss';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Country = () => {
  const { countries } = useSelector(state => state.countryList);
  const [selectedCountry, setSelectedCountry] = useState('')
  const currentCountry = useParams();

  useEffect(() => {
    setSelectedCountry(countries.filter((country) => country.alpha3Code === currentCountry.alpha3Code))
  }, [currentCountry])

  console.log(selectedCountry)

  const getCountryName = (code) => {
    const filtered = countries.filter(obj => obj.alpha3Code === code)
    console.log(filtered)
    return filtered;
  }

  if (!selectedCountry) {
    return <h1>Loading...</h1>
  }

  return (
    <section className='country'>
      <Link to='/' className='country__back'>
        <FontAwesomeIcon className='country__back-icon' icon={faArrowLeft} />
        Back
      </Link>
      <div className="country__container">
        <img
          src={selectedCountry[0].flags.svg} a
          lt={`${selectedCountry[0].name} name`}
          className="country__flag"
        />
        <div className="country__wrapper">
          <h1 className="country__name">{selectedCountry[0].name}</h1>
          <div className="country__content-wrapper">
            <div className="country__content">
              <p className="country__copy"><span className="country__copy--bolding">Native Name: </span>{selectedCountry[0].nativeName}</p>
              <p className="country__copy"><span className="country__copy--bolding">Population: </span>{selectedCountry[0].population.toLocaleString()}</p>
              <p className="country__copy"><span className="country__copy--bolding">Region: </span>{selectedCountry[0].region}</p>
              <p className="country__copy"><span className="country__copy--bolding">Sub Region: </span>{selectedCountry[0].subregion}</p>
              <p className="country__copy"><span className="country__copy--bolding">Capital: </span>{selectedCountry[0].capital}</p>
            </div>
            <div className="country__content">
              <p className="country__copy"><span className="country__copy--bolding">Top Level Domain: </span>{selectedCountry[0].topLevelDomain}</p>
              <p className="country__copy"><span className="country__copy--bolding">Currencies: </span>
                {selectedCountry[0].currencies.map((curr, i) => (
                  <span key={i}>{`${curr.name}${i !== selectedCountry[0].currencies.length - 1 ? ', ' : ''}`}</span>
                ))}
              </p>
              <p className="country__copy"><span className="country__copy--bolding">Languages: </span>
                {selectedCountry[0].languages.map((lang, i) => (
                  <span key={lang.iso639_1}>{`${lang.name}${i !== selectedCountry[0].languages.length - 1 ? ', ' : ''}`}</span>
                ))}
              </p>
            </div>
          </div>
          {!selectedCountry[0].borders ? '' :
            <div className="country__border-wrapper">
              <p className="country__border-label">Border Countries: </p>
              <div className="country__border-container">
                {selectedCountry[0].borders.map((border, i) => <Link key={i} to={`/country/${border}`} className="country__border">
                  {countries.filter(obj => obj.alpha3Code === border).map(name => name.name)}
                </Link>)}
              </div>
            </div>}
        </div>
      </div>
    </section>
  )
}

export default Country