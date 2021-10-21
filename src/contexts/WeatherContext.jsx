import { createContext, useState, useContext, useEffect } from 'react';
import React from 'react';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  //bruker null for objekter som ikke har blitt definert enda
  const [weatherData, setWeatherData] = useState(null);
  const [searches, setSearches] = useState([]);
  useEffect(() => {
    if (!weatherData) return;

    setSearches((prevSearches) => {
      if (prevSearches.find((element) => element.name === weatherData.name))
        return prevSearches;
      return [...prevSearches, weatherData];
    });
  }, [weatherData]);

  return (
    <WeatherContext.Provider
      value={{ weatherData, setWeatherData, searches, setSearches }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => useContext(WeatherContext);
export const useWeatherData = () => useWeatherContext().weatherData;
export const useSetWeatherData = () => useWeatherContext().setWeatherData;
export const useSearches = () => useWeatherContext().searches;
export const useSetSearches = () => useWeatherContext().setSearches;
