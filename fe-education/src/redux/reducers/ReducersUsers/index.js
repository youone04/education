
const initialState = {
    users: {
      loading: true,
      data: [],
      error: null,
    },
  };
  
  export const getDataUsers= (state = initialState, action) => {
    switch (action.type) {
      case 'GET_USERS_SUCCESS':
        return {
          ...state,
          users: {
            loading: false,
            data: action.payload,
            error: null,
          },
        };
      case 'GET_USERS_FAIL':
        return {
          ...state,
          users: {
            loading: false,
            data: [],
            error: action.payload,
          },
        };
      default:
        return state;
    }
  };