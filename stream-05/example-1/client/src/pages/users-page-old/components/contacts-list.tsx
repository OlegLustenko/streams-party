import React from 'react';
import {withSpinnerLoader} from '../HOC/Loader';

// @ts-ignore
export const ContactListComponent = ({contacts, filterText, deleteUser}) => {
  console.log('RENDER ContactsList');
  // @ts-ignore
  const filteredContacts = contacts.filter((contact) =>
    contact.name.includes(filterText),
  );

  return (
    <ul>
      // @ts-ignore
      {filteredContacts.map((contact) => (
        <li key={contact.email}>
          <img src={contact.thumbnail} role="presentation"/>
          <div className="contactData">
            <strong>{contact.name}</strong>
            <br/>
            <small>{contact.email}</small>
          </div>
          <button onClick={() => deleteUser(contact.email)}>Delete user</button>
        </li>
      ))}
    </ul>
  );
};

export const ContactList = withSpinnerLoader(ContactListComponent);
