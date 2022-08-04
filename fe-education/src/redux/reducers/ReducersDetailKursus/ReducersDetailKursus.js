const initialState = {
    detailKursus: {
      loading: true,
      data: [],
      error: null,
    },
  };
  
  export const getDataDetailKursus= (state = initialState, action) => {
    switch (action.type) {
      case 'GET_DETAIL_KURSUS_SUCCESS':
        return {
          ...state,
          detailKursus: {
            loading: false,
            data: action.payload,
            error: null,
          },
        };
      case 'GET_DETAIL_KURSUS_FAIL':
        return {
          ...state,
          detailKursus: {
            loading: false,
            data: [],
            error: action.payload,
          },
        };
      default:
        return state;
    }
  };