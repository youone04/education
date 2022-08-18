import React, { useEffect, useState } from "react";
import NavbarComp from "../../../components/NavbarComp/NavbarComp";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailKursusPublic } from "../../../redux/actions/actionsDetailKursusPublic/actionsDetailKursusPublic";
import CardKursusDetail from "./CardKursusDetail";
import ModalPembayaran from "./ModalPembayaran";
import { getToken } from "../../../redux/actions/actionLogin";
import { getMetodePembayaran } from "../../../redux/actions/actionMetodePembayaran/actionMetodePembayaran";


function KursusDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const getDataDetailKursus = useSelector(
    (state) => state.dataDetailKursusPublic
  );
  const { data, loading, error } = getDataDetailKursus.detailKursusPublic;
  
  const getDataLogin = useSelector((state) => state.login);
  const { token } = getDataLogin.login;

  const getMetodePem = useSelector((state) => state.dataMetodePembayaran);
  const {
    data: dataMetodePembayaran,
    loading: loadingMetodePem,
    error: errorMetodePem,
  } = getMetodePem.metodePembayaran;

  const [modalShow, setModalShow] = useState(false);
  const [jadwal, setDataJadwal] = useState([]);

  useEffect(() => {
    dispatch(getDetailKursusPublic(id));
    dispatch(getToken());
    dispatch(getMetodePembayaran());
  }, [dispatch]);

  const handleShowButton = (data) => {
    setModalShow(true);
    setDataJadwal(data);
  };

  return (
    <>
      {loading || loadingMetodePem ? (
        <p>loading</p>
      ) : error || errorMetodePem? (
        <p>{error || errorMetodePem}</p>
      ) : (
        <>
         <ModalPembayaran
            token={token}
            jadwal={jadwal}
            show={modalShow}
            data={data}
            metode={dataMetodePembayaran}
            onHide={() => setModalShow(false)}
          />
          <NavbarComp />
          <CardKursusDetail 
          handleShowButton={handleShowButton}
          data={data}/>
        </>
      )}
    </>
  );
}

export default KursusDetail;
