import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getKursusPublic } from "../../../redux/actions/actionKursusPublic/actionKursusPublic";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ModalPembayaran from "./ModalPembayaran";
import { getToken } from "../../../redux/actions/actionLogin";
import { getMetodePembayaran } from "../../../redux/actions/actionMetodePembayaran/actionMetodePembayaran";
import numberWithCommas from "../../../func/numberWithCommas";
import NavbarComp from "../../../components/NavbarComp/NavbarComp";
import {Link} from "react-router-dom";
import {Col} from "react-bootstrap";

export default function Home() {
  const dispatch = useDispatch();
  const getKursusPublicData = useSelector((state) => state.dataKursusPublic);
  const { data, loading, error } = getKursusPublicData.kursusPublic;
  const getDataLogin = useSelector((state) => state.login);
  const getMetodePem = useSelector((state) => state.dataMetodePembayaran);
  const {
    data: dataMetodePembayaran,
    loading: loadingMetodePem,
    error: errorMetodePem,
  } = getMetodePem.metodePembayaran;
  const { token } = getDataLogin.login;

  useEffect(() => {
    dispatch(getKursusPublic());
    dispatch(getToken());
    dispatch(getMetodePembayaran());
  }, [dispatch]);

  const [modalShow, setModalShow] = useState(false);
  const [jadwal, setDataJadwal] = useState([]);

  const handleShowButton = (data) => {
    setModalShow(true);
    setDataJadwal(data);
  };

  return (
    <>
      {loading || loadingMetodePem ? (
        <p>loading</p>
      ) : error || errorMetodePem ? (
        <p>{error || errorMetodePem}</p>
      ) : (
        <>
          <NavbarComp />
          <ModalPembayaran
            token={token}
            jadwal={jadwal}
            show={modalShow}
            metode={dataMetodePembayaran}
            onHide={() => setModalShow(false)}
          />
          <div className="jumbotron">
            <h1 className="display-6">Apa itu education IDN?</h1>
            <p className="lead" style={{ width: "60%" }}>
              education IDN adalah sebuah platform pembelajaran atau tutorial
              yang dilakukan secara daring(onilne) yang dimana pengajaran
              dilakukan secara tatap muka dengan menggunakan google meet/Zoom. 
              Jadwal sudah tertera pada item kursus silahkan anda sesuaikan dengan waktu kosong anda.
            </p>
            <hr className="my-4" />
            <p>
              It uses utility classes for typography and spacing to space
              content out within the larger container.
            </p>
            <a className="btn btn-primary btn-lg" href="#" role="button">
              List kursus
            </a>
          </div>
          <div className="container">
            <div className="d-flex">
              <h5>Kursus terbaru</h5>
              <p style={{ marginLeft: "auto" }}>Lihat semua</p>
            </div>
            <div className="row d-flex col-12">
              {data.map((k, i) => {
                return (
                 <Col lg={3}>
                  <Card className="m-1" key={i}>
                    <Card.Img variant="top" src={k.gambar} />
                    <Card.Body>
                      <Card.Title>{k.judul}</Card.Title>
                      <Card.Text>{k.deskripsi}</Card.Text>
                      <hr />
                      <div className="d-flex">
                      <h5>Rp. {numberWithCommas(k.harga)}</h5>
                      <Link style={{marginLeft:'auto',textDecoration:'none'}} to={`/kursus/${k.id}`}>Detail</Link>
                      </div>
                    </Card.Body>
                  </Card>
                 </Col>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}
