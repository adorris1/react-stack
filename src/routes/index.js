import React from 'react';
import App from '../components/App.jsx';
import ContentWrapper from '../components/symptomIdentifier/ContentWrapper.jsx';
import ActivityWrapper from '../components/activities/ActivityWrapper.jsx'
import AppWrapper from '../components/AppWrapper.jsx';
import InjuryWrapper from '../components/injurySummaries/InjuryWrapper.jsx';

import Router from 'react-router';
let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;

let routes = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={AppWrapper} />
      <Route path="ActivityWrapper" handler={AppWrapper} />
      <Route path="ActivityWrapper/:topic" handler={AppWrapper} />
      <Route path="ContentWrapper" handler={AppWrapper} />
      <Route path="ContentWrapper/:area" handler={AppWrapper} />
      <Route path="InjuryWrapper" handler={AppWrapper} />
      <Route path="InjuryWrapper/:area" handler={AppWrapper} />
  </Route>
);

Router.run(routes, Router.HashLocation, (Root)=> {
  React.render(<Root />, document.getElementById('container'));
});
