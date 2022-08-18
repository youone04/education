
const initialState = {
    sertifikat: {
      loading: true,
      data: null,
      error: null,
    },
  };
  
  export const getDataSertifikat = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_SERTIFIKAT_SUCCESS':
        return {
          ...state,
          sertifikat: {
            data: action.payload,
            error: null,
          },
        };
      case 'GET_SERTIFIKAT_FAIL':
        return {
          ...state,
          sertifikat: {
            loading: false,
            error: action.payload,
          },
        };
      default:
        return state;
    }
  };