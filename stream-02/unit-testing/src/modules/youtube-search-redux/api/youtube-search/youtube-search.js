import YTSearch from 'youtube-api-search';

const DEFAULT_KEY = `AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI`;

export const youtubeSearch = {
  getVideoByTerm(term) {
    return new Promise(resolve => {
      YTSearch({key: DEFAULT_KEY, term: term}, (videos) => {
        resolve(videos);
      });
    });
  },
};
