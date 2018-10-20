import {combineReducers} from 'redux';

import {youtubeSearchReducer} from './application-state/youtube-search';

export const rootReducer = combineReducers({
  applicationState: combineReducers({
    youtubeSearch: youtubeSearchReducer,
  }),
});