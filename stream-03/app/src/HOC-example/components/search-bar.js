import React from 'react';

const getInput = (event) => event.target.value;

export const SearchBar = ({ filterText, onUserInput }) => (
  <input
      type="search"
      placeholder="Search"
      value={ filterText }
      onChange={ event => onUserInput(getInput(event)) }
  />
);


export default SearchBar;