import React from 'react';
// @ts-ignore
const getInput = (event) => event.target.value;
// @ts-ignore
export const SearchBar = ({ filterText, onUserInput }) => (
  <input
      type="search"
      placeholder="Search"
      value={ filterText }
      onChange={ event => onUserInput(getInput(event)) }
  />
);


export default SearchBar;
