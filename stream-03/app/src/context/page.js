import React, {Component} from 'react';
import {PageInternal} from './page-internal';

export class Page extends Component {
  render() {
    return (
      <div className="panel">
        Top Page
        <PageInternal />
        <footer>page.js</footer>
      </div>
    );
  }
}
