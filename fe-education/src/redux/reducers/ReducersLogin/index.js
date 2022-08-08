import jwt_decode from "jwt-decode"

const initialState = {
    login: {
      loading: true,
      token: null,
      role: null,
      error: null,
    },
  };
  
  export const getDataLogin = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_LOGIN_SUCCESS':
        return {
          ...state,
          login: {
            loading: false,
            token: action.payload,
            role : jwt_decode(action.payload).role,
            error: null,
          },
        };
      case 'GET_LOGIN_FAIL':
        return {
          ...state,
          login: {
            loading: false,
            token: null,
            error: action.payload,
          },
        };
      default:
        return state;
    }
  };