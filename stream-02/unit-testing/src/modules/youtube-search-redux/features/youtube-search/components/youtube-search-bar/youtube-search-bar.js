import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {YtInput} from '../../../../components/yt-input';
import {selectYoutubeSearchTerm} from '../../../../app-store/store/application-state/youtube-search/selectors';
import {setSearchTerm} from '../../../../app-store/store/application-state/youtube-search/actions/set-search-term';
import {getYoutubeVideos} from '../../actions/get-youtube-videos';

export class YoutubeSearchBarComponent extends Component {
  static propTypes = {
    onSearchTermChange: PropTypes.func,
  };

  render() {
    const {
      term,
    } = this.props;

    return (
      <div className="search-bar">
        <YtInput
          value={term}
          onChange={this.onInputChange}
        />
        <span style={{fontSize: 25, paddingLeft: 15}}>(ﾉ≧∀≦)ﾉ ‥…━━━★</span>
      </div>
    );
  }

  onInputChange = (value) => {
    this.props.onSearchTermChange(value);
    this.props.getYoutubeVideos();
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    term: selectYoutubeSearchTerm(state),
  };
};

export const YoutubeSearchBar = connect(mapStateToProps, {
  onSearchTermChange: setSearchTerm,
  getYoutubeVideos
})(YoutubeSearchBarComponent);
