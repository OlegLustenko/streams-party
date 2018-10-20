export const SET_YOUTUBE_TERM = 'SET_YOUTUBE_TERM';

export const setSearchTerm = (term) => ({
  type: SET_YOUTUBE_TERM,
  payload: term,
});