// @ts-ignore
export const selectUsersPageFilteredUsers = state => {
  const { contacts, searchTerm } = state;

  // @ts-ignore
  const filteredContacts = contacts.filter(contact =>
    contact.name.includes(searchTerm)
  );

  return filteredContacts;
};
