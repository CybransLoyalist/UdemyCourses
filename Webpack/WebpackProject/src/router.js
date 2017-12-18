import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Home from './components/Home';
import ArtistMain from './components/artists/ArtistMain';

const componentRoutes = {
  component: Home,
  path: '/',
  indexRoute: {component: ArtistMain},
  childRoutes: [
    {
      path: 'artists/new',
      getComponent(location, cb) {
        System.import('./components/artists/ArtistCreate') //careful - dont refactor it - because webpack looks for string 'Syste.import' and it can not work when we use some string concatenation etc
        .then(module =>cb(null, module.default)) //first arg = error object
      }
    },
    {
      path: 'artists/:id',
      getComponent(location, cb) {
        System.import('./components/artists/ArtistDetail')
        .then(module =>cb(null, module.default))
      }
    },
    {
      path: 'artists/:id/edit',
      getComponent(location, cb) {
        System.import('./components/artists/ArtistEdit')
        .then(module =>cb(null, module.default))
      }
    }
  ]
};

const Routes = () => {
  return (
    <Router history={hashHistory} routes={componentRoutes} />
  );
};

export default Routes;
