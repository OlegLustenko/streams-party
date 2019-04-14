// @ts-ignore
export const updateSearchTerm = (dispatch, state) => (term: string) => {
  dispatch({type: 'UPDATE_SEARCH_TERM', payload: term});
};
