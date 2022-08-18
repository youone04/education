
const initialState = {
    pendapatanBatch: {
      loading: true,
      data: null,
      error: null,
    },
  };
  
  export const getDataPendapatanBatch = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_PENDAPATAN_BATCH_SUCCESS':
        return {
          ...state,
          pendapatanBatch: {
            data: action.payload,
            error: null,
          },
        };
      case 'GET_PENDAPATAN_BATCH_FAIL':
        return {
          ...state,
          pendapatanBatch: {
            loading: false,
            error: action.payload,
          },
        };
      default:
        return state;
    }
  };