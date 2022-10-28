import React, { useEffect, useState } from "react";
import NavbarComp from "../../../components/NavbarComp/NavbarComp";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailKursusPublic } from "../../../redux/actions/actionsDetailKursusPublic/actionsDetailKursusPublic";
import CardKursusDetail from "./CardKursusDetail";
import ModalPembayaran from "./ModalPembayaran";
import { getToken } from "../../../redux/actions/actionLogin";
import { getMetodePembayaran } from "../../../redux/actions/actionMetodePembayaran/actionMetodePembayaran";
import Footer from "../../../components/Footer/Footer";
import { getKursusPublic } from "../../../redux/actions/actionKursusPublic/actionKursusPublic";
import Card from "react-bootstrap/Card";
import {Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import numberWithCommas from "../../../func/numberWithCommas";


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

  const getKursusPublicData = useSelector((state) => state.dataKursusPublic);
  const { data:dataKursus, loading:loadingKursus, error:errorKursus } = getKursusPublicData.kursusPublic;

  const [modalShow, setModalShow] = useState(false);
  const [jadwal, setDataJadwal] = useState([]);

  useEffect(() => {
    dispatch(getDetailKursusPublic(id));
    dispatch(getToken());
    dispatch(getKursusPublic());
    dispatch(getMetodePembayaran());
  }, [dispatch,id]);

  const handleShowButton = (data) => {
    setModalShow(true);
    setDataJadwal(data);
  };


  return (
    <>
      {loading || loadingMetodePem||loadingKursus ? (
        <p>loading</p>
      ) : error || errorMetodePem || errorKursus? (
        <p>{error || errorMetodePem || errorKursus}</p>
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

          <div className="container mt-5">
            <div className="d-flex">
              <h5>Kursus Terkait</h5>
              {/* <p style={{ marginLeft: "auto" }}>Lihat semua</p> */}
            </div>
            <div className="row d-flex col-12 pl-3">
              {dataKursus.filter(data => data.id != id )
              .map((k, i) => {
                return (
                //  <Col lg={3}>
                  <Card className=" col-sm-12 col-lg-3 m-1 card-item-cust" key={i}>
                    <Card.Img variant="top" src={k.gambar} />
                    <Card.Body>
                      <Card.Title>{k.judul}</Card.Title>
                      <Card.Text>{k.deskripsi.slice(0, 100)} . .</Card.Text>
                      <hr />
                      <div className="d-flex">
                      <h5>Rp. {numberWithCommas(k.harga)}.-</h5>
                      <Link style={{marginLeft:'auto',textDecoration:'none'}} to={`/kursus/${k.id}`}>Detail</Link>
                      </div>
                    </Card.Body>
                  </Card>
                //  </Col>
                );
              })
              }
            </div>
          </div>

          <Footer/>
        </>
      )}
    </>
  );
}

export default KursusDetail;
