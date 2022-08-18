import axios from "axios";

export const getSertifikat = (userId, id) => async (dispatch) => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_END_POINT}/sertifikat/${userId}/${id}`);
      dispatch({
        type: 'GET_SERTIFIKAT_SUCCESS',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: 'GET_SERTIFIKAT_FAIL',
        payload: error.message
      });
    }
  };