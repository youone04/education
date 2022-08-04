const initialState = {
    kursus: {
      loading: true,
      data: [],
      error: null,
    },
  };
  
  export const getDataKursus= (state = initialState, action) => {
    switch (action.type) {
      case 'GET_KURSUS_SUCCESS':
        return {
          ...state,
          kursus: {
            loading: false,
            data: action.payload,
            error: null,
          },
        };
      case 'GET_KURSUS_FAIL':
        return {
          ...state,
          kursus: {
            loading: false,
            data: [],
            error: action.payload,
          },
        };
      default:
        return state;
    }
  };