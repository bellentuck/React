import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {  // lol yeah that pretty much sums it up 
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
