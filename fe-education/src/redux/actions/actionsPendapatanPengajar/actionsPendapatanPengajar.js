import axios from "axios";

export const getPendapatanPengajar = (id, batch) => async (dispatch) => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_END_POINT}/pendapatan-pengajar/${id}/${batch}`);
      dispatch({
        type: 'GET_PENDAPATAN_PENGAJAR_SUCCESS',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: 'GET_PENDAPATAN_PENGAJAR_FAIL',
        payload: error.message
      });
    }
  };