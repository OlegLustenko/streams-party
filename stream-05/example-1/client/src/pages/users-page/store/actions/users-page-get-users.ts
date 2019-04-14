import {usersAPI} from '../../../api/users/users';

// @ts-ignore
export const usersPageGetUsers = (dispatch, state) => async () => {
  const contacts = await usersAPI.getUsers();

  dispatch({type: 'SET_USERS', payload: contacts});
};
