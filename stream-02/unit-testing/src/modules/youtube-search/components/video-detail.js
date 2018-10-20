import React from 'react';

const VideoDetail = ({selectedVideo}) => {
  if (!selectedVideo) {
    return <div>Loading...</div>;
  }

  const {videoId} = selectedVideo.id;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} title="uniq"/>
      </div>
      <div className="details">
        <div>{selectedVideo.snippet.title}</div>
        <div>{selectedVideo.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
