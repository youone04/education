
const initialState = {
    kursusPublic: {
      loading: true,
      data: null,
      error: null,
    },
  };
  
  export const getDataKursusPublic = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_KURSUS_PUBLIC_SUCCESS':
        return {
          ...state,
          kursusPublic: {
            data: action.payload,
            error: null,
          },
        };
      case 'GET_KURSUS_PUBLIC_FAIL':
        return {
          ...state,
          kursusPublic: {
            loading: false,
            error: action.payload,
          },
        };
      default:
        return state;
    }
  };