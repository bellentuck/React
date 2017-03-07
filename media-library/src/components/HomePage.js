import React from 'react';
import { Link } from 'react-router';

// Home page component. Welcome page featuring library link.
const HomePage = () => (
  <div className="jumbotron center">
    <h1 className="lead">Presenting a Media Library built with React, Redux and Redux-saga [ future: use case: try for sitcom reader site - menu on top: home | videos | books; corresponding links ]</h1>
    <div>
      <Link to="library">
        <button className="btn btn-lg btn-primary">Library</button>
      </Link>
    </div>
  </div>
);

export default HomePage;
