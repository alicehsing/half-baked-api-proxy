import React from 'react';

export default function ForecastList({ forecastPlaces }) {

  function parseTime(dt) {
    return new Date(dt * 1000).toUTCString();
  }
  return (
    <div className='weather'>
      {
        forecastPlaces.map((forecastPlace, i) => <div className='weather-item' key={`${forecastPlace.dt}-${i}`}>
          <p>Date: {parseTime(forecastPlace.dt)}</p>
          <p>Daytime Temperature: {forecastPlace.temp.day} Fahrenheit</p>
          <p>{forecastPlace.weather[0].description}</p>
          <p>Cloudiness: {forecastPlace.clouds}%</p>
          <p>Humidity: {forecastPlace.humidity}%</p>
          

        </div>)
      }
    </div>
  );
}
