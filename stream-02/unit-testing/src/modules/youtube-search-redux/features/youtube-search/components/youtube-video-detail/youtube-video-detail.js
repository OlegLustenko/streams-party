import React from 'react';
import {connect} from 'react-redux';

export const YoutubeVideoDetailComponent = ({video}) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const {videoId} = video.id;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} title="uniq"/>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    video: state.applicationState.youtubeSearch.selectedVideo,
  };
};

export const YoutubeVideoDetail = connect(mapStateToProps)(YoutubeVideoDetailComponent);
