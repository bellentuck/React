import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './components/HomePage';
import MediaGalleryPage from './containers/MediaGalleryPage';

// routes.js maps components to different routes.
// Serving as entry [to all other components], parent component App wraps around other components.
// Special case IndexRoute maps HomePage to the default route.
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="library" component={MediaGalleryPage} />
  </Route>
);
