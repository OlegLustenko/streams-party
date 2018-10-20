import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {
  YoutubeSearchBar,
  YoutubeList,
  YoutubeVideoDetail,
} from './components';

import {
  getYoutubeVideos,
} from './actions/get-youtube-videos';

export class YoutubeSearchReduxComponent extends Component {
  static propTypes = {
    getYoutubeVideos: PropTypes.func,
  };

  componentDidMount() {
    this.props.getYoutubeVideos(); // recompose
  }

  render() {
    return (
      <div>
        <YoutubeSearchBar/>

        <div className="row">
          <YoutubeVideoDetail/>
          <YoutubeList/>
        </div>
      </div>
    );
  }
}

export const YoutubeSearchRedux = connect(null, {
  getYoutubeVideos,
})(YoutubeSearchReduxComponent);
