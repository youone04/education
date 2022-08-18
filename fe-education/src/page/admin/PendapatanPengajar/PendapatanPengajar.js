import React,{useEffect} from "react";
import Footer from "../../../components/Admin/Footer";
import Header from "../../../components/Admin/Header";
import Menu from "../../../components/Admin/Menu";
import Table from "./Table";
import { getBatch } from "../../../redux/actions/actionBatch/actionBatch";
import { useDispatch, useSelector } from "react-redux";
import { getPendapatanPengajar } from "../../../redux/actions/actionsPendapatanPengajar/actionsPendapatanPengajar";
import { useParams } from "react-router-dom";

function PendapatanPengajar() {
  const dispatch = useDispatch();
  const {id} = useParams();
  const getDataBatch = useSelector((state) => state.dataBatch);
  const {
    data: dataBatch,
    loading: loadingBatch,
    error: errorBatch,
  } = getDataBatch.batch;

  const getPendapatanPeng = useSelector((state) => state.dataPendapatanPengajar);
  const {
    data,
    loading,
    error,
  } = getPendapatanPeng.pendapatanPengajar;

  useEffect(() => {
    dispatch(getBatch());
    dispatch(getPendapatanPengajar(id ,'B1'))
  }, [dispatch]);

  const handleChangeBatch = (e) => {
    dispatch(getPendapatanPengajar(id ,e.target.value));
  };
  return (
    <>
      {loadingBatch || loading ? (
        <p>Loading</p>
      ) : errorBatch || error ? (
        <p>{errorBatch || error}</p>
      ) : (
        <>
          <Header />
          <Menu />
          <Table data={data} batch={dataBatch} handleChangeBatch={handleChangeBatch} />
          <Footer />
        </>
      )}
    </>
  );
}

export default PendapatanPengajar;
