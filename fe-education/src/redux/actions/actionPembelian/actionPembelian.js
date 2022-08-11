import axios from "axios";

export const getPembelianAdmin = () => async (dispatch) => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_END_POINT}/pembelian-admin`);
      dispatch({
        type: 'GET_PEMBELIAN_ADMIN_SUCCESS',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: 'GET_PEMBELIAN_ADMIN_FAIL',
        payload: error.message
      });
    }
  };