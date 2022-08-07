
const initialState = {
    kursusBeli: {
      loading: true,
      data: null,
      error: null,
    },
  };
  
  export const getDataKursusBeli = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_KURSUS_BELI_SUCCESS':
        return {
          ...state,
          kursusBeli: {
            data: action.payload,
            error: null,
          },
        };
      case 'GET_KURSUS_BELI_FAIL':
        return {
          ...state,
          kursusBeli: {
            loading: false,
            error: action.payload,
          },
        };
      default:
        return state;
    }
  };