import { useWeatherData } from '../contexts/WeatherContext';
import React from 'react';

//Icons
import { BsClouds, BsCloudHaze } from 'react-icons/bs';

const WeatherDisplay = () => {
  const data = useWeatherData();
  const temp = data.main.temp;
  const iconId = data.weather[0].icon;

  return (
    <div className='w-full md:mx-auto md:w-2/3 mt-10 flex flex-col items-center border-2 border-red-50'>
      <p>{data.name}</p>
      <p>
        Temprature {temp} <Icon iconId={iconId} />
      </p>
      <p>Feels like {data.main.feels_like}</p>
      <div></div>
    </div>
  );
};

const Icon = ({ iconId }) => {
  console.log(iconId);
  const url = `http://openweathermap.org/img/wn/${iconId}@4x.png`;

  return <img src={url} alt='' />;
};

export default WeatherDisplay;
