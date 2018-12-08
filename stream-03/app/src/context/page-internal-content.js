import React, {Component, PropTypes} from 'react';

export class PageInternalContent extends Component {
  render() {
    const {locale} = this.context;
    return (
      <div className="contentPanel">
        <h1>"Header"</h1>
        <p>Text context</p>
        <button>Button Click me</button>
        <footer>page-internal-content.js</footer>
      </div>
    );
  }
}
