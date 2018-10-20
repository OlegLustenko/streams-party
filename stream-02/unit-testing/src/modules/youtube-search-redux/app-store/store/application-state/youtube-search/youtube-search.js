import {combineReducers} from 'redux';

import {
  youtubeSearchVideosReducer,
  youtubeSearchTermReducer,
} from './reducers';
import {youtubeSelectedVideoReducer} from './reducers/youtube-selected-video';

export const youtubeSearchReducer = combineReducers({
  videos: youtubeSearchVideosReducer,
  term: youtubeSearchTermReducer,
  selectedVideo: youtubeSelectedVideoReducer,
});