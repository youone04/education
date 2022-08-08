import axios from "axios";
import jwtDecode from "jwt-decode"

export const getKursusBeli = (token) => async (dispatch) => {
    try {
      const {userId} = jwtDecode(token);
      const { data } = await axios.get(`${process.env.REACT_APP_END_POINT}/pembelian/${userId}`);
      dispatch({
        type: 'GET_KURSUS_BELI_SUCCESS',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: 'GET_KURSUS_BELI_FAIL',
        payload: error.message
      });
    }
  };