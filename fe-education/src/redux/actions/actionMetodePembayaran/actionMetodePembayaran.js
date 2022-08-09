import axios from "axios";

export const getMetodePembayaran = () => async (dispatch) => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_END_POINT}/metode-pembayaran`);
      dispatch({
        type: 'GET_METODE_PEMBAYARAN_SUCCESS',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: 'GET_METODE_PEMBAYARAN_FAIL',
        payload: error.message
      });
    }
  };