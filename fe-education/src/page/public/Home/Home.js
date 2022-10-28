import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getKursusPublic } from "../../../redux/actions/actionKursusPublic/actionKursusPublic";
import Card from "react-bootstrap/Card";
import { getToken } from "../../../redux/actions/actionLogin";
import { getMetodePembayaran } from "../../../redux/actions/actionMetodePembayaran/actionMetodePembayaran";
import numberWithCommas from "../../../func/numberWithCommas";
import NavbarComp from "../../../components/NavbarComp/NavbarComp";
import {Link} from "react-router-dom";
import {Col} from "react-bootstrap";
import Jumbotron from "../../../components/Jumbotron/Jumbotron";
import Footer from "../../../components/Footer/Footer";

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


  return (
    <>
      {loading || loadingMetodePem ? (
        <p>loading</p>
      ) : error || errorMetodePem ? (
        <p>{error || errorMetodePem}</p>
      ) : (
        <>
          <NavbarComp />
          <Jumbotron/>
          <marquee><h6>Kursus di mentori secara daring, ayo tunggu apa lagi daftar sekarang diskon <span className="text-success">30%</span></h6></marquee>
          {/* <marquee><h4>Selamat pagi ,tetap mengeluh dan putus asa ya!</h4></marquee> */}
          <div className="container mt-5">
            <div className="d-flex">
              <h5>Kursus terbaru</h5>
              <p style={{ marginLeft: "auto" }}>Lihat semua</p>
            </div>
            <div className="row d-flex col-12 pl-4">
              {data.map((k, i) => {
                return (
                //  <Col lg={3}>
                  <Card className="m-1 col-sm-12 col-lg-3 card-hover card-item-cust" key={i}>
                    <Card.Img variant="top" src={k.gambar} />
                    <Card.Body>
                      <Card.Title>{k.judul}</Card.Title>
                      <Card.Text>{k.deskripsi.slice(0, 70)} . .</Card.Text>
                      <hr />
                      <h6 style={{textDecoration:'line-through',color:'gray'}}>Rp. {numberWithCommas(k.harga)}.-</h6>
                      <div style={{opacity:'0.9'}} className="d-flex p-2">
                      <h5>Rp. {numberWithCommas(k.harga)}.-</h5>
                      <Link style={{marginLeft:'auto',textDecoration:'none'}} to={`/kursus/${k.id}`}>Detail</Link>
                      </div>
                    </Card.Body>
                  </Card>
                //  </Col>
                );
              })}
            </div>
            <hr/>
          </div>

          <div className="container mt-5">
            <div className="d-flex">
              <h5>Kursus terlaris</h5>
              <p style={{ marginLeft: "auto" }}>Lihat semua</p>
            </div>
            <div className="row d-flex col-12 pl-4">
              {data.map((k, i) => {
                return (
                //  <Col lg={3}>
                  <Card className="m-1  col-sm-12 col-lg-3 card-item-cust" key={i}>
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
              })}
            </div>
          </div>
          <Footer/>
        </>
      )}
    </>
  );
}
