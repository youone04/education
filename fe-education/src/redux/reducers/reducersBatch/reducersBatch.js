
const initialState = {
    batch: {
      loading: true,
      data: null,
      error: null,
    },
  };
  
  export const getDataBatch = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_BATCH_SUCCESS':
        return {
          ...state,
          batch: {
            data: action.payload,
            error: null,
          },
        };
      case 'GET_BATCH_FAIL':
        return {
          ...state,
          batch: {
            loading: false,
            error: action.payload,
          },
        };
      default:
        return state;
    }
  };