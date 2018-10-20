import {selectApplicationState} from '../../common/select-application-state';

export const selectYoutubeVideos = (state) => {
  return selectApplicationState(state).youtubeSearch.videos;
};
