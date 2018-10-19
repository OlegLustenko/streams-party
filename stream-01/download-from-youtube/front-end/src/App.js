import React, {Component} from 'react';
import streamSaver from 'streamsaver';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    const fileStream = streamSaver.createWriteStream('filename.txt');
    const writer = fileStream.getWriter();
    const encoder = new TextEncoder();
    let data = 'a'.repeat(1024);
    let uint8array = encoder.encode(data + '\n\n');

    writer.write(uint8array);
    writer.close();

    fetch('/get-playlist-videos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        user: 'ok',
      }),
    })
      .then(mediaStream => {
        let fr = new FileReader();
        let mediaRecorder = new MediaRecorder(mediaStream);
        let chunks = Promise.resolve();
        let fileStream = streamSaver.createWriteStream('filename.mp4');
        let writer = fileStream.getWriter();
        // use .mp4 for video(camera & screen) and .wav for audio(microphone)

        // Start recording
        mediaRecorder.start();

        // closeBtn.onclick = event => {
        //   mediaRecorder.stop();
        //   setTimeout(() =>
        //       chunks.then(evt => writer.close())
        //     , 1000);
        // };

        mediaRecorder.ondataavailable = ({blob}) => {
          chunks = chunks.then(
            () =>
              new Promise(resolve => {
                fr.onload = () => {
                  writer.write(new Uint8Array(fr.result));
                  resolve();
                };
                fr.readAsArrayBuffer(blob);
              }),
          );
        };
      })
      .then(console.log);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
