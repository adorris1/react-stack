import React from 'react';
import App from '../components/App.jsx';
import ContentWrapper from '../components/ContentWrapper.jsx';
import Router from 'react-router';
let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;

let routes = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={ContentWrapper} />
    <Route path="ContentWrapper" handler={ContentWrapper} />
    <Route path="ContentWrapper/:area" handler={ContentWrapper} />
  </Route>
);

Router.run(routes, Router.HashLocation, (Root)=> {
  React.render(<Root />, document.getElementById('container'));
});
