import { useState } from 'react';
import Spinner from './Spinner';
import ForecastList from './ForecastList';

export default function WeatherSearch() {
      // you'll need to track your weather search results, the loading state, and a form field for location with a default value.
  const [forecastPlaces, setForecastPlaces] = useState([]);
  const [city, setCity] = useState('San Diego');
  const [state, setState] = useState('CA');
  const [country, setCountry] = useState('USA');
  const [isWeatherLoading, setWeatherLoading] = useState(false);

  
  async function handleWeatherSubmit(e) {
    e.preventDefault();
      
        // set the loading state to true
    setWeatherLoading(true);
        // use fetch to make a request to your netlify weather function. Be sure to pass the location as a query param in the URL
    const response = await fetch(`/.netlify/functions/weather?city=${city}&state=${state}&country=${country}`);
    
        // put the jsonified data in state and set the loading state to false
    const json = await response.json();
    setForecastPlaces(json.daily);
    setWeatherLoading(false);
  }
      
  return (
    <section className='weather'>
      {/* make the fetch on submit */}
      <form onSubmit={handleWeatherSubmit}>
            Search weather for a city
        {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <label> City
          <input onChange={e => setCity(e.target.value)} placeholder='San Diego'/>
        </label>
        <label> State
          <input onChange={e => setState(e.target.value)} placeholder='CA'/>
        </label>
        <label> Country
          <input onChange={e => setCountry(e.target.value)} placeholder='USA' />
        </label>
        <button>Get weather</button>
      </form>
      {/* Make a ForecastList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
      {
        isWeatherLoading
          ? <Spinner />
          : <ForecastList forecastPlaces={forecastPlaces} />
      }
    </section>
  );

}
