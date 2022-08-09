
const initialState = {
    metodePembayaran: {
      loading: true,
      data: [],
      error: null,
    },
  };
  
  export const getDataMetodePembayaran = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_METODE_PEMBAYARAN_SUCCESS':
        return {
          ...state,
          metodePembayaran: {
            loading: false,
            data: action.payload,
            error: null,
          },
        };
      case 'GET_METODE_PEMBAYARAN_FAIL':
        return {
          ...state,
          metodePembayaran: {
            loading: false,
            data: null,
            error: action.payload,
          },
        };
      default:
        return state;
    }
  };