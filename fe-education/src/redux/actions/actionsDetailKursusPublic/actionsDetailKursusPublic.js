import axios from "axios";

export const getDetailKursusPublic = (id) => async (dispatch) => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_END_POINT}/kursus-public/${id}`);

      dispatch({
        type: 'GET_DETAIL_KURSUS_PUBLIC_SUCCESS',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: 'GET_DETAIL_KURSUS_PUBLIC_FAIL',
        payload: error.message
      });
    }
  };