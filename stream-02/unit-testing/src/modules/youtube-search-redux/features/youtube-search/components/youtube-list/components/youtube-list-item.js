import React from 'react';

import {
  MediaBody,
  MediaHeading,
  MediaLeft,
} from '../../../../../components/yt-media/components';

import {
  YtMedia,
} from '../../../../../components/yt-media';

export const YoutubeListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <YtMedia className="video-list media">
        <MediaLeft>
          <img className="media-object" src={imageUrl} alt=""/>
        </MediaLeft>

        <MediaBody>
          <MediaHeading>{video.snippet.title}</MediaHeading>
        </MediaBody>
      </YtMedia>
    </li>
  );
};

