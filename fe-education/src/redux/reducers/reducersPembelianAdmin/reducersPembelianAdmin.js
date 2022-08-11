
const initialState = {
    pembelian_admin: {
      loading: true,
      data: null,
      error: null,
    },
  };
  
  export const getDataPembelianAdmin = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_PEMBELIAN_ADMIN_SUCCESS':
        return {
          ...state,
          pembelian_admin: {
            data: action.payload,
            error: null,
          },
        };
      case 'GET_PEMBELIAN_ADMIN_FAIL':
        return {
          ...state,
          bepembelian_adminlajar: {
            loading: false,
            error: action.payload,
          },
        };
      default:
        return state;
    }
  };