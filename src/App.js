import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryList } from './features/countryList/countryList';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

const App = () => {
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

  console.log(countries)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/country/:country_code' element={<Country />} /> */}
      </Routes>
    </div>
  );
}

export default App;
