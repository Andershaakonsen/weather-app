//Icons
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { BsSearch } from 'react-icons/bs';

//Imports
import { useSetWeatherData } from '../contexts/WeatherContext';
import React, { useState } from 'react';

const SearchBox = () => {
  //State
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const setWeatherData = useSetWeatherData();

  const apiKey = '6a1047eef44439b4087e822b1243851a';

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();

    setInput('');
  };

  const getData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${apiKey}`
      );

      if (!response.ok)
        throw new Error(`${response.status}, An error has ocurred`);
      const data = await response.json();
      setError(false);
      setWeatherData(data);
    } catch (e) {
      console.log(e);
      setError(true);
      setWeatherData(null);
    }
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className='w-full border-2 border-transparent rounded-lg flex flex-col mb-10 '>
      {/* Header */}
      <div className='flex items-center'>
        <h2 className='bg-gradient-to-r from-primary-500 to-primary-400 text-transparent bg-clip-text'>
          Weather App
        </h2>
        <TiWeatherPartlySunny size='3rem' className='ml-3 text-primary-500' />
      </div>

      <form className='mt-4 w-full flex items-center' onSubmit={handleSubmit}>
        <input
          type='text'
          className='w-4/6 bg-gray-800 rounded-lg opacity-70 focus:border-transparent outline-none focus:ring-0 text-gray-300 text-lg pl-2 px-4'
          placeholder='Enter city..'
          onChange={handleInput}
          value={input}
        />

        <button className=' p-2 cursor-pointer'>
          <BsSearch size='2rem' />
        </button>
      </form>
      {error && <p className='text-red-400 ml-2'>Sorry... City not found!</p>}
    </div>
  );
};

export default SearchBox;
