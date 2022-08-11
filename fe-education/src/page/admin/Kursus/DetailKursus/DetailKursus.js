import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../../../../components/Admin/Footer";
import Header from "../../../../components/Admin/Header";
import Menu from "../../../../components/Admin/Menu";
import { getDetailKursus } from "../../../../redux/actions/actionDetailKursus/actionDetailKursus";
import BodyDetailKursus from "./BodyDetailKursus";
function DetailKursus() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const getDataKursus = useSelector((state) => state.datDetailKursus);
  const getDataLogin = useSelector((state) => state.login);
  const { token } = getDataLogin.login;
  const { data, loading, error } = getDataKursus.detailKursus;
  useEffect(() => {
    dispatch(getDetailKursus(token, id));
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <p>Loading ...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          {" "}
          <Header />
          <Menu />
          <BodyDetailKursus detailKursus={data} />
          <Footer />
        </>
      )}
    </>
  );
}

export default DetailKursus;
