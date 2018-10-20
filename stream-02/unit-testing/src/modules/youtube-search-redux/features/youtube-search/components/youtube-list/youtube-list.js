import React from 'react';
import {connect} from 'react-redux';

import {YoutubeListItem} from './components/youtube-list-item';
import {selectYoutubeVideos} from '../../../../app-store/store/application-state/youtube-search/selectors/select-youtube-videos';
import {setSelectedVideos} from '../../../../app-store/store/application-state/youtube-search/actions';

export const YoutubeListComponent = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <YoutubeListItem
        onVideoSelect={props.onVideoSelect}
        video={video}
        key={video.etag}
      />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    videos: selectYoutubeVideos(state),
  };
};

export const YoutubeList = connect(mapStateToProps, {
  onVideoSelect: setSelectedVideos,
})(YoutubeListComponent);
