import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {styles} from './TabList';

class Tab extends Component {
  static propTypes = {
    tabNumber: PropTypes.number,
    activeTabIndex: PropTypes.number,
  };

  render() {
    const {header, style, onClick} = this.props;

    return (
      <div style={style} onClick={onClick}>
        <h1>{header}</h1>
      </div>
    );
  }
}

export class TabDeclarativeWay extends Component {
  render() {
    const tabStyles = this.props.isDisabled
      ? styles.disabled
      : this.props.isActive
        ? styles.active
        : styles.tabs;

    return React.cloneElement(this.props.children, {
      style: tabStyles,
      onClick: this.props.isDisabled ? () => {} : this.props.setActive,
      header: this.props.tab.header,

    });
  }
}

export default Tab;
