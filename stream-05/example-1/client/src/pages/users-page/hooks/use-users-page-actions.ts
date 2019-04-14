import {useContext} from 'react';
import {updateSearchTerm} from '../store/actions/update-search-term';

import {usersPageGetUsers} from '../store/actions/users-page-get-users';
import {
  UsersPageDispatchContext,
  UsersPageStateContext,
} from '../UsersPageStoreRoot';

export const useUsersPageActions = () => {
  const dispatch = useContext(UsersPageDispatchContext);
  const state = useContext(UsersPageStateContext);


  return {
    getUsers: usersPageGetUsers(dispatch, state),
    updateSearchTerm: updateSearchTerm(dispatch, state),
    deleteUsers: (email: string) => {}
  }
};
