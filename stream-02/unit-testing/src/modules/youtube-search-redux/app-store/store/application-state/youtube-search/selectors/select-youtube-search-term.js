import {selectApplicationState} from '../../common/select-application-state';

export const selectYoutubeSearchTerm = (state) => {
  return selectApplicationState(state).youtubeSearch.term;
};