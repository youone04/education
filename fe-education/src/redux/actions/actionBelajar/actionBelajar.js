import axios from "axios";
import jwt_decode from "jwt-decode";

export const getBelajar = (id , token) => async (dispatch) => {
    try {
      const {userId} = jwt_decode(token)
      const { data } = await axios.get(`${process.env.REACT_APP_END_POINT}/belajar/${userId}/${id}`);
      dispatch({
        type: 'GET_BELAJAR_SUCCESS',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: 'GET_BELAJAR_FAIL',
        payload: error.message
      });
    }
  };