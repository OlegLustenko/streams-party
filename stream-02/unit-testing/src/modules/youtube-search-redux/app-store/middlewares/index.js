import thunk from 'redux-thunk';

import {
  logMiddleware,
} from './log-middleware/log-middleware';

export const middlewares = [thunk, logMiddleware];
