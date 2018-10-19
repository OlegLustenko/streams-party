const axios = require('axios');
const cheerio = require('cheerio');

const playlistUrl = 'https://www.youtube.com/playlist?list=PLQIhGrdan_s0gTbw6BAK__yW5_Z9YnxfY';
const baseURL = 'https://www.youtube.com/watch?v=';

const parseVideosFromPlaylistMiddleware = async (request, response, next) => {
  const axiosResponse = await axios(playlistUrl);
  const $ = cheerio.load(axiosResponse.data);
  const trs = $('tr');

  const videosFromPlaylist = [];
  for (let i = 0; i < trs.length; i++) {
    const videoMetaData = trs.eq(i).attr();
    videosFromPlaylist.push({
      url: baseURL + videoMetaData['data-video-id'],
      title: videoMetaData['data-title'],
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