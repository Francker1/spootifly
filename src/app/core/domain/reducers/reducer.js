import { types } from '../actions/actionTypes';

export const initialState = {
  user: null,
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case types.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
