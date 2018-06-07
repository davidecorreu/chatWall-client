import { combineReducers } from 'redux';

const loginInitialState = {
  logged: false,
  auth_token: undefined,
  username: undefined
};

const login = (state = loginInitialState, action) => {
  switch (action.type) {
  case 'LOGIN_INIT':
    return ({
      ...state,
      logged: action.logResult
    });
  case 'LOGIN_SUCCESSFULL':
    return ({
      ...state,
      logged: true,
      auth_token: action.auth_token,
      username: action.username
    });
  }
  return state;
};

// Combining reducers

const reducers = combineReducers({
  login
});

export default reducers;