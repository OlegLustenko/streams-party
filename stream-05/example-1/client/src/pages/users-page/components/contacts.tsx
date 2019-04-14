import React from "react";
import { SearchBar } from "./search-bar";
import { ContactList } from "./contacts-list";

import "./contacts.css";

export const Contacts = () => {
  return (
    <div className="contactApp">
      <SearchBar />
      // @ts-ignore
      <ContactList />
    </div>
  );
};


const ContactsSlot = (props) => {
  const {
    SearchBar,
    ContactList
  } = props;

  return (
    <div className="contactApp">
      <SearchBar />
      // @ts-ignore
      <ContactList />
    </div>
  )
}
