import axios from "axios";
import jwt_decode from "jwt-decode";
export const getDetailKursus = (token , id) => async (dispatch) => {
  try {
    const decoded = jwt_decode(token);
    const axiosJWT = axios.create();
    axiosJWT.interceptors.request.use(
      async (config) => {
        const currentDate = new Date();
        if (decoded.exp * 1000 < currentDate.getTime()) {
          const response = await axios.get(
            `${process.env.REACT_APP_END_POINT}/token`
          );
          config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    const { data } = await axiosJWT.get(
      `${process.env.REACT_APP_END_POINT}/kursus/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: "GET_DETAIL_KURSUS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_DETAIL_KURSUS_FAIL",
      payload: error.message,
    });
  }
};
