import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../../../../components/Admin/Footer";
import Header from "../../../../components/Admin/Header";
import Menu from "../../../../components/Admin/Menu";
import { getKursus } from "../../../../redux/actions/actionKursus/actionKursus";
import Table from "./Table";

function Kursus() {
  const dispatch = useDispatch();
  const getDataKursus = useSelector((state) => state.dataKursus);
  const getDataLogin = useSelector((state) => state.login);
  const { token } = getDataLogin.login;
  const { data, loading, error } = getDataKursus.kursus;
  useEffect(() => {
    dispatch(getKursus(token));
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <p>Loading ...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <Header />
          <Menu />
          <Table data={data} title={"kursus"} tambah={"tambah-kursus"} />
          <Footer />
        </>
      )}
    </>
  );
}

export default Kursus;
