
const initialState = {
    pendapatanPengajar: {
      loading: true,
      data: null,
      error: null,
    },
  };
  
  export const getDataPendapatanPengajar = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_PENDAPATAN_PENGAJAR_SUCCESS':
        return {
          ...state,
          pendapatanPengajar: {
            data: action.payload,
            error: null,
          },
        };
      case 'GET_PENDAPATAN_PENGAJAR_FAIL':
        return {
          ...state,
          pendapatanPengajar: {
            loading: false,
            error: action.payload,
          },
        };
      default:
        return state;
    }
  };