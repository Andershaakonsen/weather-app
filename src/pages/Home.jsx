import SearchBox from '@/components/SearchBox';
import WeatherDisplay from '@/components/WeatherDisplay';
import { useWeatherData } from '../contexts/WeatherContext';

import React from 'react';

const Home = () => {
  const weatherData = useWeatherData();

  return (
    <div className='container mx-auto flex flex-col items-center justify-center h-screen'>
      <div className='md:w-4/6 w-full h-5/6 border-2 border-transparent rounded-lg flex flex-col bg-gray-800 bg-opacity-60 px-10 py-10'>
        <SearchBox />
        {weatherData ? <WeatherDisplay /> : ''}
      </div>
    </div>
  );
};

export default Home;
