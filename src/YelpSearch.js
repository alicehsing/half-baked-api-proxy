import { useState } from 'react';
import Spinner from './Spinner';
import BusinessesList from './BusinessesList';

export default function YelpSearch() {
    // you'll need to track your yelp search results, the loading state, and a form field for location with a default value.
  const [businesses, setBusinesses] = useState([]);
  const [search, setSearch] = useState('beaverton or usa');
  const [isYelpLoading, setYelpLoading] = useState(false);


  async function handleYelpSubmit(e) {
    e.preventDefault();
  
    // set the loading state to true
    setYelpLoading(true);
    // use fetch to make a request to your netlify yelp function. Be sure to pass the search query as a query param in the URL
    const response = await fetch(`/.netlify/functions/yelp?search=${search}`);

    // put the jsonified data in state and set the loading state to false
    const json = await response.json();
  
    setBusinesses(json);
    setYelpLoading(false);
  }
  
  return (
    <section className='yelp'>
      {/* make the fetch on submit */}
      <form onSubmit={handleYelpSubmit}>
        Search yelp for a city
        {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <label>
          <input value='beaverton or usa' onChange={e => setSearch(e.target.value)} />
        </label>
        <button>Search yelp</button>
      </form>
      {/* Make a BusinessesList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
      {
        isYelpLoading
          ? <Spinner />
          : <BusinessesList businesses={businesses}/>
      }
    </section>
  );
}
  
