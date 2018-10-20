import {SET_SELECTED_VIDEO} from '../actions/set-selected-video';

const initialState = null;
const actionHandlers = new Map([
  [SET_SELECTED_VIDEO, (state, action) => action.payload],
]);

export const youtubeSelectedVideoReducer = (state = initialState, action) => {
  if (actionHandlers.has(action.type)) {
    return actionHandlers.get(action.type)(state, action);
  }
  return state;
};

