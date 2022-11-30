import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as solidMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as regularMoon } from "@fortawesome/free-regular-svg-icons";
import './Header.scss';

const Header = ({ switchTheme }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <header className='header'>
      <Link to='/' className='header__link'>
        <h1 className='header__title'>Where in the world?</h1>
      </Link>
      <div className="header__theme-container">
        <button
          className="header__theme-button"
          onClick={() => { setIsDarkMode(!isDarkMode); switchTheme() }}>
          <FontAwesomeIcon
            icon={!isDarkMode ? solidMoon : regularMoon}
            className='header__theme-icon'
          />
          Dark Mode
        </button>
      </div>

    </header>
  )
}

export default Header