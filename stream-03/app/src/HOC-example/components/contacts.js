import React, {Component} from 'react';
import {SearchBar} from './search-bar';
import {ContactList} from './contacts-list';

import './contacts.css';

export class Contacts extends Component {
  state = {
    filterText: '',
  };

  handleUserInput = (searchTerm) => {
    this.setState({filterText: searchTerm});
  };

  render() {
    const {filterText} = this.state;
    return (
      <div className="contactApp">
        <SearchBar filterText={filterText} onUserInput={this.handleUserInput} />
        <ContactList contacts={this.props.contacts} filterText={filterText} />
      </div>
    );
  }
}
