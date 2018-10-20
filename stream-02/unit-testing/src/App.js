import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {YoutubeSearch} from './modules/youtube-search/youtube-search';
import {YoutubeSearchApp} from './modules/youtube-search-redux/main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <YoutubeSearchApp />
      </div>
    );
  }
}

export default App;
