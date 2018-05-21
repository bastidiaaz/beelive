import {
  createReactNavigationReduxMiddleware,
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const navMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);
const middlewares = [navMiddleware, logger, thunk];

const addListener = createReduxBoundAddListener("root");

export {
  middlewares,
  addListener,
};
