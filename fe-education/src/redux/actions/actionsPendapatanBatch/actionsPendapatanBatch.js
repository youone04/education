import axios from "axios";

export const getPendapatanBatch = (batch) => async (dispatch) => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_END_POINT}/pendapatan-batch/${batch}`);
      dispatch({
        type: 'GET_PENDAPATAN_BATCH_SUCCESS',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: 'GET_PENDAPATAN_BATCH_FAIL',
        payload: error.message
      });
    }
  };