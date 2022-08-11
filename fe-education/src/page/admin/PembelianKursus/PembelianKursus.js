import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../../components/Admin/Header";
import Menu from "../../../components/Admin/Menu";
import Footer from "../../../components/Admin/Footer";
import ManagePembelian from "./ManagePembelian/ManagePembelian";
import { getPembelianAdmin } from "../../../redux/actions/actionPembelian/actionPembelian";

function PembelianKursus() {
  const dispatch = useDispatch();
  const pembelianAdmin = useSelector((state) => state.dataPembelianAdmin);
  const { data, loading, error } = pembelianAdmin.pembelian_admin;

  useEffect(() => {
    dispatch(getPembelianAdmin());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <p>loading</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <Header />
          <Menu />
          <ManagePembelian data={data} />
          <Footer />
        </>
      )}
    </>
  );
}

export default PembelianKursus;
