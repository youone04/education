import axios from "axios";

export const getKursusPublic = () => async (dispatch) => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_END_POINT}/kursus-public`);
      dispatch({
        type: 'GET_KURSUS_PUBLIC_SUCCESS',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: 'GET_KURSUS_PUBLIC_FAIL',
        payload: error.message
      });
    }
  };