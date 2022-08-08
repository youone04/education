import axios from "axios";

export const getToken = () => async (dispatch) => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_END_POINT}/token`);
      dispatch({
        type: 'GET_LOGIN_SUCCESS',
        payload: data.accessToken,
      });
    } catch (error) {
      dispatch({
        type: 'GET_LOGIN_FAIL',
        payload: error.message
      });
    }
  };