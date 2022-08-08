import axios from "axios";

export const getBatch = () => async (dispatch) => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_END_POINT}/batch`);
      dispatch({
        type: 'GET_BATCH_SUCCESS',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: 'GET_BATCH_FAIL',
        payload: error.message
      });
    }
  };