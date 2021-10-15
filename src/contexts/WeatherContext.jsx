import { createContext, useState, useContext } from 'react';
import React from 'react';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  //bruker null for objekter som ikke har blitt definert enda
  const [weatherData, setWeatherData] = useState(null);
  /* const [recived, setRecived] = useState(false); */

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => useContext(WeatherContext);
export const useWeatherData = () => useWeatherContext().weatherData;
export const useSetWeatherData = () => useWeatherContext().setWeatherData;
/* export const useRecived = () => useWeatherContext().recived;
export const useSetRecived = () => useWeatherContext().setRecived; */
