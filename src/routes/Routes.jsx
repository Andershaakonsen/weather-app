import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '@/pages/Home';
import { WeatherProvider } from '../contexts/WeatherContext';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <WeatherProvider>
          <Route exact path='/' component={Home} />
        </WeatherProvider>
      </Switch>
    </Router>
  );
}
