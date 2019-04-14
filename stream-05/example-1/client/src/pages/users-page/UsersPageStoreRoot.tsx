import React, {useReducer} from 'react';
import {
  ActionType,
  usersPageReducer,
  usersPageReducerInitialState, UsersPageState,
} from './store/reducers/usersPageReducer';

export const UsersPageStateContext = React.createContext<UsersPageState | null>(null);
export const UsersPageDispatchContext = React.createContext<React.Dispatch<ActionType> | null>(null);

export const UsersPageStoreRoot: React.FunctionComponent = props => {
  const [state, dispatch] = useReducer(usersPageReducer, usersPageReducerInitialState);

  return (
    <UsersPageStateContext.Provider value={state}>
      <UsersPageDispatchContext.Provider value={dispatch}>
        {props.children}
      </UsersPageDispatchContext.Provider>
    </UsersPageStateContext.Provider>
  );
};
