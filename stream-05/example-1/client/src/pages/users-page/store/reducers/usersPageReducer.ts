import {User} from '../../../api/users/users';

export interface UsersPageState {
  contacts: User[];
  searchTerm: string;
  filteredContacts: User[];
}

export interface ActionType {
  type: string;
  payload: any;
}

export const usersPageReducerInitialState = {
  contacts: [],
  searchTerm: '',
  filteredContacts: [],
};

export const usersPageReducer = (state: UsersPageState, action: ActionType) => {
  switch (action.type) {
    case 'SET_USERS': {
      return {
        ...state,
        contacts: [...action.payload],
      };
    }
    case 'UPDATE_SEARCH_TERM': {
      return {
        ...state,
        searchTerm: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
