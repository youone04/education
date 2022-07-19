import React,{useEffect} from 'react';
import { getUsers } from "../../redux/actions/actionUsers";
import { useSelector, useDispatch } from 'react-redux';

function Dashboard() {
  const dispatch = useDispatch();
  const getDataUsers = useSelector((state) => state.dataUsers);
  const getDataLogin = useSelector((state) => state.login);
  const { token} = getDataLogin.login;
  const { data, loading, error } = getDataUsers.users;
  useEffect(() => {
    dispatch(getUsers(token))
  },[dispatch]);
    
  return (
    <>
       
       {
        loading?<p>Loading ...</p>:
        error? <p>{error}</p>: <div>Dashboard</div>
       }

    </>
  )
}
export default Dashboard;