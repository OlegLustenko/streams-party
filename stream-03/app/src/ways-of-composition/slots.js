import React, {Component} from 'react';

export class Header extends Component {

  shouldComponentUpdate(nextProps, nextState, nextContext) { // boolean
    return nextProps.left !== this.props.left
  }

  render() {
    const styles = {display: 'flex', justifyContent: 'space-between'};
    return (
      <header style={styles}>
        {this.props.left}
        {this.props.right}
      </header>
    );
  }
}
