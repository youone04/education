import React, { useEffect, useState } from "react";
import Footer from "../../../components/Admin/Footer";
import Header from "../../../components/Admin/Header";
import Menu from "../../../components/Admin/Menu";
import { getPendapatanBatch } from "../../../redux/actions/actionsPendapatanBatch/actionsPendapatanBatch";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";
import { getBatch } from "../../../redux/actions/actionBatch/actionBatch";

function PendapatanBatch() {
  const dispatch = useDispatch();
  const getDataPendapatanBatch = useSelector(
    (state) => state.dataPendapatanBatch
  );
  const getDataBatch = useSelector((state) => state.dataBatch)
  const { data, loading, error } = getDataPendapatanBatch.pendapatanBatch;
  const { data : dataBatch, loading: loadingBatch, error : errorBatch } = getDataBatch.batch;

  useEffect(() => {
    dispatch(getPendapatanBatch('B1'));
    dispatch(getBatch());
  }, [dispatch]);

  const handleChangeBatch = (e) => {
    dispatch(getPendapatanBatch(e.target.value));
  }

  return (
    <>
      {loading || loadingBatch ? (
        <p>Loaing</p>
      ) : error || errorBatch ? (
        <p>{error || errorBatch}</p>
      ) : (
        <>
          <Header />
          <Menu />
          <Table 
          title = "pendapatan" 
          data={data}
          batch ={dataBatch}
          handleChangeBatch={handleChangeBatch}
           />
          <Footer />
        </>
      )}
    </>
  );
}

export default PendapatanBatch;
