const fs = require('fs');
const ytdl = require('ytdl-core');
const http = require('http');
const axios = require('axios');
const bodyParser = require('body-parser');
const readline = require('readline');

const connect = require('connect');
const app = connect();

const {parseVideosFromPlaylistMiddleware} = require('./middlewares/parse-videos-from-youtube-playlist');

app.use(bodyParser.json());
app.use(parseVideosFromPlaylistMiddleware);
// app.use((req, res) => {
//   const {videosFromPlaylist} = req.db;

//   videosFromPlaylist.forEach((video) => {
//     ytdl(video.url).pipe(fs.createWriteStream('./' + video.title));
//   });
// });

function getFilesizeInBytes(filename) {
  const stats = fs.statSync(filename);
  const fileSizeInBytes = stats['size'];
  return fileSizeInBytes;
}

app.use('/get-playlist-videos', (req, res, next) => {
  const {videosFromPlaylist} = req.db;
  // console.log(videosFromPlaylist);

  videosFromPlaylist.forEach((youtube) => {
    const video = ytdl(youtube.url);
    video.pipe(fs.createWriteStream(`./static-download-folder/${youtube.title}.mp4`));
    video.once('response', () => {
      starttime = Date.now();
    });
    video.on('progress', (chunkLength, downloaded, total) => {
      const floatDownloaded = downloaded / total;
      const downloadedMinutes = (Date.now() - starttime) / 1000 / 60;
      // readline.cursorTo(process.stdout, 0);
      process.stdout.write('\n\n');
      process.stdout.write(`${(floatDownloaded * 100).toFixed(2)}% downloaded`);
      process.stdout.write(`(${(downloaded / 1024 / 1024).toFixed(2)}MB of ${(total / 1024 / 1024).toFixed(2)}MB)\n`);
      process.stdout.write(`running for: ${downloadedMinutes.toFixed(2)}minutes`);
      process.stdout.write(
        `, estimated time left: ${(downloadedMinutes / floatDownloaded - downloadedMinutes).toFixed(2)}minutes `,
      );
      // readline.moveCursor(process.stdout, 0, -1);
    });
    video.on('end', () => {
      process.stdout.write('\n\n');
    });
  });

});

app.use((req, res) => {
  console.log(req.db.videosFromPlaylist);
  res.end('hello world');
});

http.createServer(app).listen(5000, (err) => {
  if (err) {
    console.err(err);
  }

  console.log('server running at 5000');
});
