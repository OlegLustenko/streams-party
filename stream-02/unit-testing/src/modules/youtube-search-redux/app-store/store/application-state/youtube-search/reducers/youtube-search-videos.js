import {SET_YOUTUBE_VIDEOS} from '../actions/set-youtube-videos';

const initialState = [];
const actionHandlers = new Map([
  [SET_YOUTUBE_VIDEOS, (state, action) => action.payload],
]);

export const youtubeSearchVideosReducer = (state = initialState, action) => {
  if (actionHandlers.has(action.type)) {
    return actionHandlers.get(action.type)(state, action);
  }
  return state;
};

