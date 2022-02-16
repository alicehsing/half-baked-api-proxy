import React from 'react';

export default function BusinessesList({ businesses }) {
  return (
    <div className='yelp'>
      {
        businesses.map((business, i) => <div className='yelp-item' key={`${business.name}-${i}`}>
          <h3>{business.name}</h3>
          <p>Rating: {business.rating}</p>
          <p>{business.location.address1}</p>
          <img src={business.image_url} />
        </div>)
      }
    </div>
  );
}
