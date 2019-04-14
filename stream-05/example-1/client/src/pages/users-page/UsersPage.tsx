import React from 'react';

import './users-page-old.css';

import './components/loading-hoc.css';
import {UsersPagePage} from './UsersPagePage';
import {
  UsersPageStoreRoot,
} from './UsersPageStoreRoot';


export const UsersPage = () => {
  return (
    <UsersPageStoreRoot>
      <UsersPagePage/>
    </UsersPageStoreRoot>
  );
};
