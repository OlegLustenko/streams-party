import React, { Component } from 'react';
import {PageInternalContent} from './page-internal-content';

export class PageInternal extends Component {
  render() {
    return (
      <div className="internalPanel">
        <PageInternalContent />
        <footer>page-internal.js</footer>
      </div>
    );
  }
}
