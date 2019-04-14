import React, { useContext, useMemo } from "react";
import { useUsersPageActions } from "../hooks/use-users-page-actions";
import { selectUsersPageFilteredUsers } from "../store/selectors/select-users-page-filtered-users";
import { UsersPageStateContext } from "../UsersPageStoreRoot";

// @ts-ignore
export const ContactList = () => {
  const state = useContext(UsersPageStateContext);
  // @ts-ignore
  const { deleteUser } = useUsersPageActions();
  const filteredUsers = useMemo(() => selectUsersPageFilteredUsers(state), [
    state
  ]);

  if (!filteredUsers.length) {
    return <div className="loader" />;
  }

  return (
    <ul>
      // @ts-ignore
      {filteredUsers.map(contact => (
        <li key={contact.email}>
          <img src={contact.thumbnail} role="presentation" alt="" />
          <div className="contactData">
            <strong>{contact.name}</strong>
            <br />
            <small>{contact.email}</small>
          </div>
          <button onClick={() => deleteUser(contact.email)}>Delete user</button>
        </li>
      ))}
    </ul>
  );
};
