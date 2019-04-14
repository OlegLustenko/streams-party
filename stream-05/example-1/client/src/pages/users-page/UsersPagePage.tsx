import React, { useEffect } from "react";

import { Contacts } from "./components/contacts";
import { useUsersPageActions } from "./hooks/use-users-page-actions";

export const UsersPagePage = () => {
  const { getUsers } = useUsersPageActions();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <Contacts />
    </div>
  );
};
