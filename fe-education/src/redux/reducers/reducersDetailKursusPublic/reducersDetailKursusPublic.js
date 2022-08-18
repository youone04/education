
const initialState = {
    detailKursusPublic: {
      loading: true,
      data: null,
      error: null,
    },
  };
  
  export const getDataDetailKursusPublic= (state = initialState, action) => {
    switch (action.type) {
      case 'GET_DETAIL_KURSUS_PUBLIC_SUCCESS':
        return {
          ...state,
          detailKursusPublic: {
            data: action.payload,
            error: null,
          },
        };
      case 'GET_DETAIL_KURSUS_PUBLIC_FAIL':
        return {
          ...state,
          badetailKursusPublictch: {
            loading: false,
            error: action.payload,
          },
        };
      default:
        return state;
    }
  };