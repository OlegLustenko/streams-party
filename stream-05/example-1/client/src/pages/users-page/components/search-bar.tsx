import React, { useContext } from "react";
import { useUsersPageActions } from "../hooks/use-users-page-actions";
import { UsersPageStateContext } from "../UsersPageStoreRoot";
// @ts-ignore
const getInput = event => event.target.value;
// @ts-ignore
export const SearchBar = () => {
  const state = useContext(UsersPageStateContext);
  const { updateSearchTerm } = useUsersPageActions();
  // @ts-ignore
  const { searchTerm } = state;

  return (
    <input
      type="search"
      placeholder="Search"
      value={searchTerm}
      onChange={event => updateSearchTerm(getInput(event))}
    />
  );
};

export default SearchBar;
