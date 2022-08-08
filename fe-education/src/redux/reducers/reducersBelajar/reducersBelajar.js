
const initialState = {
    belajar: {
      loading: true,
      data: null,
      error: null,
    },
  };
  
  export const getDataBelajar = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_BELAJAR_SUCCESS':
        return {
          ...state,
          belajar: {
            data: action.payload,
            error: null,
          },
        };
      case 'GET_BELAJAR_FAIL':
        return {
          ...state,
          belajar: {
            loading: false,
            error: action.payload,
          },
        };
      default:
        return state;
    }
  };