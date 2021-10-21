import { useSetSearches, useSetWeatherData } from '../contexts/WeatherContext';
import React, { useState } from 'react';

//Icons
import { BsClouds, BsCloudHaze } from 'react-icons/bs';
import { GrExpand } from 'react-icons/gr';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { VscChromeMinimize } from 'react-icons/vsc';

const WeatherDisplay = ({ data }) => {
  const [minimize, setMinimize] = useState(false);

  //State
  const setSearches = useSetSearches();
  const setWeatherData = useSetWeatherData();

  //const data = useWeatherData();
  const temp = data.main.temp;
  const iconId = data.weather[0].icon;

  const handleMinimize = () => {
    setMinimize(true);
  };

  const handleExpand = () => {
    setMinimize(false);
  };

  const handleDelete = () => {
    setSearches((prevSearches) => {
      return prevSearches.filter((el) => el.name !== data.name);
    });
  };

  return (
    <>
      {minimize ? (
        <Minimized data={data} onClick={handleExpand} />
      ) : (
        <div className='w-full md:mx-auto md:w-2/3 mb-10 flex flex-col items-center border-2 border-gray-700 rounded-md  pl-4 py-4'>
          <div className='flex w-full justify-end pr-4 '>
            <button
              className='flex justify-center mx-1'
              onClick={handleMinimize}
            >
              <VscChromeMinimize />
            </button>

            <button className='mx-1' onClick={handleDelete}>
              <AiOutlineCloseCircle />
            </button>
          </div>
          <div className='flex w-full items-center min-h-28'>
            <p className='text-white text-4xl w-full '>
              {data.name},{' '}
              <span className='text-gray-300'>{data.sys.country}</span>{' '}
            </p>
            <Icon iconId={iconId} />
          </div>
          <p className='w-full mt-2 text-gray-300'>
            Current temprature:
            <span className='text-blue-400 ml-4'>{temp}&#8451;</span>;
          </p>
          <p className='w-full mt-2 text-gray-300'>
            Feels Like:{' '}
            <span className='text-blue-400 ml-4'>
              {data.main.feels_like}&#8451;
            </span>
          </p>
        </div>
      )}
    </>
  );
};

const Icon = ({ iconId }) => {
  const url = `http://openweathermap.org/img/wn/${iconId}@2x.png`;

  return <img src={url} alt='' height='100px' width='100px' />;
};

const Minimized = ({ data, ...rest }) => {
  return (
    <div
      className='w-full md:mx-auto md:w-2/3  flex items-center justify-between border-2 border-gray-700 rounded-md  pl-2 py-1 mb-2'
      {...rest}
    >
      <p className='text-white text-lg '>
        {data.name}, <span className='text-gray-300'>{data.sys.country}</span>
      </p>

      <p className='text-blue-400   w-16'>{data.main.temp}&#8451;</p>
    </div>
  );
};
export default WeatherDisplay;
