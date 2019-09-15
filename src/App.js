import React from 'react';
import Navigation from './config/navigation';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <Navigation />
    </Provider>
  );
};

export default App;
