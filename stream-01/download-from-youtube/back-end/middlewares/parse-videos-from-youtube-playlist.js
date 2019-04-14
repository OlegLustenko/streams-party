const axios = require('axios');
const cheerio = require('cheerio');

const playlistUrl = 'https://www.youtube.com/playlist?list=PLLt67_3G1id5v131NtM6pZ6wfcHuq1WGi';
const baseURL = 'https://www.youtube.com/watch?v=';

const parseVideosFromPlaylistMiddleware = async (request, response, next) => {
  const axiosResponse = await axios(playlistUrl);
  const $ = cheerio.load(axiosResponse.data);
  const trs = $('tr');

  const videosFromPlaylist = [];
  for (let i = 0; i < trs.length; i++) {
    const videoMetaData = trs.eq(i).attr();
    if (videoMetaData['data-title'].includes('Sadko')) {
      continue;
    }
    videosFromPlaylist.push({
      url: baseURL + videoMetaData['data-video-id'],
      title: videoMetaData['data-title'].replace(/ /g, '-').replace(/\//g, '-'),
    });
    /*
      {
        название плейлиста: []
      }
     */
  }

  console.log(videosFromPlaylist);
  request.db = request.db || {};
  request.db.videosFromPlaylist = videosFromPlaylist;
  next();
};

module.exports = {
  parseVideosFromPlaylistMiddleware,
};
