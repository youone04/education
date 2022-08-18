import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getToken } from "../../redux/actions/actionLogin";

export default function PublicRoute() {
  const dispatch = useDispatch();
  const getDataLogin = useSelector((state) => state.login);
  const { token, loading, error, role } = getDataLogin.login;
  const location = useLocation();

  useEffect(() => {
    dispatch(getToken());
  }, [dispatch]);

  return loading ? (
    <p>loading</p>
  ) : error ? (
    <Outlet />
  ) : token ? (
    role?.find((r) => r === "user") ? (
      <Navigate to="/user" state={{ from: location }} replace />
    ) : (
      <Navigate to="/dashboard" state={{ from: location }} replace />
    )
  ) : (
    <Outlet />
  );
}
