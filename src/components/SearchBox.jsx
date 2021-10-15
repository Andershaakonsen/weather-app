import React, { useState } from 'react';

//Icons
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { BsSearch } from 'react-icons/bs';
import { useSetWeatherData } from '../contexts/WeatherContext';

const SearchBox = () => {
  const [input, setInput] = useState('');
  const setWeatherData = useSetWeatherData();

  const apiKey = '6a1047eef44439b4087e822b1243851a';

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return setWeatherData(data);
      });
    setInput('');
  };

  const handleInput = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className='w-full border-2 border-transparent rounded-lg flex flex-col '>
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
    </div>
  );
};

export default SearchBox;
