import {youtubeSearch} from '../../../api/youtube-search/youtube-search';
import {selectYoutubeSearchTerm} from '../../../app-store/store/application-state/youtube-search/selectors';
import {
  setSelectedVideos,
  setYoutubeVideos,
} from '../../../app-store/store/application-state/youtube-search/actions';

export const getYoutubeVideosCreator = ({
  selectYoutubeSearchTerm,
  youtubeSearchAPI,
  setYoutubeVideos,
  setSelectedVideos,
}) => () => async (dispatch, getState) => {
  const term = selectYoutubeSearchTerm(getState());
  const videos = await youtubeSearchAPI.getVideoByTerm(term);

  dispatch(setYoutubeVideos(videos));
  if (videos.length) {
    dispatch(setSelectedVideos(videos[0]));
  }
};

export const getYoutubeVideos = getYoutubeVideosCreator({
  youtubeSearchAPI: youtubeSearch,
  selectYoutubeSearchTerm,
  setSelectedVideos,
  setYoutubeVideos,
});
