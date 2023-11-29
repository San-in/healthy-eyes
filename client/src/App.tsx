import React, {JSX} from 'react';
import Navigation from './navigations/Navigation';
import {Provider} from 'react-redux';
import {store} from './redux/store';

export const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};
