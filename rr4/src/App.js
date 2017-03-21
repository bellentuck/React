import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  //Link (stateless)
  NavLink
} from 'react-router-dom';
import './App.css';

const isActiveFunc = (match, location) => {
  console.log(match, location)
  return match
}

const Links = () => (
  <nav>
    <NavLink exact activeClassName="active" to="/">Home</NavLink>
    <NavLink activeStyle={{color: 'green'}} to={{pathname: '/about'}}>About</NavLink>
    {/*'replace' replaces the last route with the current one.*/}
    <NavLink
      isActive={isActiveFunc}
      replace to={{pathname: '/contact'}}
    >Contact</NavLink>
  </nav>
);

const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route path="/about" render={() => <h1>About</h1>} />
      <Route path="/contact" render={() => <h1>Contact</h1>} />
      {/*Vocab: exact & strict paths; component, render, children*/}
    </div>
  </Router>
);

export default App
