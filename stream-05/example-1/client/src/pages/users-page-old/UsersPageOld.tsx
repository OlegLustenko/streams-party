import React, { Component } from "react";

import { Contacts } from "./components/contacts";
import "./users-page-old.css";

import "./components/loading-hoc.css";

export class UsersPageOld extends Component {
  state = { contacts: [] };

  componentDidMount() {
    fetch("/users-random")
      .then(response => response.json())
      .then(contacts => this.setState({ contacts }));
  }

  deleteUser = (email:string) => {
    this.setState({
    // @ts-ignore
      contacts: this.state.contacts.filter(user => user.email !== email)
    })
  }

  render() {
    return (
      <div className="App">
        // @ts-ignore
        <Contacts
          contacts={this.state.contacts}
          deleteUser={this.deleteUser}
        />
      </div>
    );
  }
}
