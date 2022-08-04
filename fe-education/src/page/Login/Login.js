import React, { useRef } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";
import { getToken } from "../../redux/actions/actionLogin";
import { useSelector, useDispatch } from 'react-redux';
import SweetAlert from "sweetalert";

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const password = useRef();
  const email = useRef();
  const getDataLogin = useSelector((state) => state.login);
  const { token, loading, error } = getDataLogin.login;

  const handleLogin = async (e) => {
    e.preventDefault();
    const dataSend = {
      email: email.current.value,
      password: password.current.value,
    };

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_END_POINT}/login`,
        JSON.stringify(dataSend),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if(res.data.accessToken) {
        dispatch(getToken())
        navigate('/dashboard');
      }

    } catch (error) {
      SweetAlert("Failed", error.response && error.response.data.msg
      ? error.response.data.msg
      : error.message, "error");
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type={"email"} ref={email} placeholder="email" />
        <br />
        <input type={"password"} ref={password} placeholder="password" />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
