import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './yt-input.css';

export class YtInput extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    value: '',
  };

  render() {
    const {
      value,
    } = this.props;

    return (
      <input
        className="YT-input"
        value={value}
        {...this.props}
        onChange={this.onChange}
      />
    );
  }

  onChange = (event) => {
    const {
      target: {
        value,
      },
    } = event;

    this.props.onChange(value);
  };
}
