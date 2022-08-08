import { Outlet } from "react-router-dom";
import {useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getToken } from "../../redux/actions/actionLogin";
import Unauthorized from "../Unauthorized";

const RequireAuth = ({ allowedRoles }) => {
    const dispatch = useDispatch();
    const getDataLogin = useSelector((state) => state.login);
    const {loading, error , role } = getDataLogin.login;

    useEffect(() => {
        dispatch(getToken());
    },[dispatch]);

    return (
         loading?<p>loading</p>:
         error?<Unauthorized error={error+", Silahkan login!"}/>:
         role?.find(r => allowedRoles?.includes(r)) ? <Outlet /> : <Unauthorized error={'Anda tidak diberi akses!'}/>
    );
}

export default RequireAuth;