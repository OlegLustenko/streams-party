import React from 'react';
import {Provider} from 'react-redux';
import {initStore} from './app-store';

import {YoutubeSearchRedux} from './features/youtube-search/youtube-search';

const store = initStore();

export const YoutubeSearchApp = () => (
  <Provider store={store}>
    <YoutubeSearchRedux />
  </Provider>
);
