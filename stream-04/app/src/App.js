import React, {Component} from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    import('./solid/single-responsibility').then(() => {});
  }

  render() {
    return <div className="App" id="app" />;
  }
}

export default App;
