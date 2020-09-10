import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
import { AnimatedRoute } from 'react-router-transition';
import Home from '../../containers/Home';
import Profile from '../../containers/Profile';
import Settings from '../../containers/Settings';
import Store from '../../containers/Store';

const AnimatedRouteExt = ({ exact, path, component }) => (
  <AnimatedRoute
    atEnter={{ opacity: 0 }}
    atLeave={{ opacity: 0 }}
    atActive={{ opacity: 1 }}
    exact={exact}
    path={path}
    component={component}
  />
);
AnimatedRouteExt.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  component: PropTypes.elementType.isRequired,
};

AnimatedRouteExt.defaultProps = {
  exact: false,
};

function Router({ children }) {
  return (
    <BrowserRouter>
      { children }
      <Switch>
        <AnimatedRouteExt exact path="/" component={Home} />
        <AnimatedRouteExt path="/profile" component={Profile} />
        <AnimatedRouteExt path="/settings" component={Settings} />
        <AnimatedRouteExt path="/store" component={Store} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

Router.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Router;
