import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryList } from './features/countryList/countryList';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';

const App = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const { isLoading, countries } = useSelector(state => state.countryList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCountryList());
  }, [])

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className="App" data-theme={theme}>
      <Header
        switchTheme={switchTheme}
      />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/country/:country_code' element={<Country />} /> */}
      </Routes>
    </div>
  );
}

export default App;
