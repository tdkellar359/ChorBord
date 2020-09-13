import React from 'react';
import PropTypes from 'prop-types';
import Slide from '@material-ui/core/Slide';
import {
  BrowserRouter,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
import Home from '../../containers/Home';
import Profile from '../../containers/Profile';
import Settings from '../../containers/Settings';
import Market from '../../containers/Market';

function Router({ children, disableSlide }) {
  return (
    <BrowserRouter>
      { children }
      <Switch>
        <Route path="/home">
          {disableSlide
            ? <Home />
            : (
              <Slide in direction="up">
                <Home />
              </Slide>
            )}
        </Route>
        <Route path="/profile">
          {disableSlide
            ? <Profile />
            : (
              <Slide in direction="up">
                <Profile />
              </Slide>
            )}
        </Route>
        <Route path="/settings">
          {disableSlide
            ? <Settings />
            : (
              <Slide in direction="up">
                <Settings />
              </Slide>
            )}
        </Route>
        <Route path="/market">
          {disableSlide
            ? <Market />
            : (
              <Slide in direction="up">
                <Market />
              </Slide>
            )}
        </Route>
        <Route path="*">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

Router.propTypes = {
  children: PropTypes.node.isRequired,
  disableSlide: PropTypes.bool,
};

Router.defaultProps = {
  disableSlide: false,
};

export default Router;
