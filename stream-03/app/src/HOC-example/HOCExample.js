import React, {Component} from 'react';

import {Contacts} from './components/contacts';
import './hoc-example.css';

import './components/loading-hoc.css'
export class HOCExample extends Component {
  state = {contacts: []};

  componentDidMount() {
    fetch('/users-random')
      .then((response) => response.json())
      .then((contacts) => this.setState({contacts}));
  }

  render() {
    return (
      <div className="App">
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}
