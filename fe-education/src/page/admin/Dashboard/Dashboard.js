import React, { useEffect } from "react";
import { getUsers } from "../../../redux/actions/actionUsers";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../../components/Admin/Header";
import Menu from "../../../components/Admin/Menu";
import Footer from "../../../components/Admin/Footer";

function Dashboard() {
  const dispatch = useDispatch();
  const getDataUsers = useSelector((state) => state.dataUsers);
  const getDataLogin = useSelector((state) => state.login);
  const { token } = getDataLogin.login;
  const { data, loading, error } = getDataUsers.users;
  useEffect(() => {
    dispatch(getUsers(token));
  }, [dispatch]);

  console.log(data)
  return (
    <>
      {loading ? (
        <p>Loading ...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
        <Header/>
        <Menu/>
          <div className="content-wrapper">
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1>{"judul"}</h1>
                  </div>
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item">
                        <a href="#!!">Home</a>
                      </li>
                      <li className="breadcrumb-item active">{"judul"}</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
            <section className="content">
              <h1>Dashoard</h1>
            </section>
          </div>
          <Footer/>
        </>
      )}
    </>
  );
}
export default Dashboard;
