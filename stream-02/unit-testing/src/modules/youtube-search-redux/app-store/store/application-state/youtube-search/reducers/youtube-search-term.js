import {SET_YOUTUBE_TERM} from '../actions/set-search-term';

const initialState = 'marvel';
const actionHandlers = new Map([
  [SET_YOUTUBE_TERM, (state, action) => action.payload],
]);

export const youtubeSearchTermReducer = (state = initialState, action) => {
  if (actionHandlers.has(action.type)) {
    return actionHandlers.get(action.type)(state, action);
  }
  return state;
};

