import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector, useDispatch } from "react-redux";
import { getBelajar } from "../../../redux/actions/actionBelajar/actionBelajar";
import NavbarComp from "../../../components/NavbarComp/NavbarComp";
import Footer from "../../../components/Footer/Footer";
import jwtDecode from "jwt-decode";

function Belajar() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const getDataBelajar = useSelector((state) => state.dataBelajar);
  const getDataLogin = useSelector((state) => state.login);
  const { token } = getDataLogin.login;
  const { data, loading, error } = getDataBelajar.belajar;
  useEffect(() => {
    dispatch(getBelajar(id, token));
  }, [dispatch]);


  return (
    <>
      {loading ? (
        <p>Loading ...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
        <NavbarComp/>
        <div className="container bg-white mt-3">
          <div className="p-1 mb-3">
          <h2 className="ml-2">Belajar</h2>
          </div>
          <div className="d-flex row">
            <Card className="col-sm-12 col-lg-6">
              <Card.Img variant="top mt-2" src={data.kursus.gambar} />
              <Card.Body>
                <Card.Title>
                  {data.kursus.judul} - {data.batch_pembelian}
                </Card.Title>
                <Card.Text>{data.kursus.deskripsi}</Card.Text>
                <Link className="btn btn-dark" to={`/srtf/${jwtDecode(token).userId}/${id}`}>sertifikat</Link>
              </Card.Body>
            </Card>

            <Card className="ml-1 col-sm-12 col-lg-3">
              <ListGroup.Item>
                <h3 className="ml-2 p-1">List Link</h3>
              </ListGroup.Item>

              <ListGroup
                variant="flush"
                className="custome-scroll"
                style={{ overflow: "auto", height: 500 }}
              >
                {!data.status ? (
                  <h4
                    className="text-center mt-5"
                    style={{ color: "#80808073" }}
                  >
                    <i>Pembayaran Belum di Konfirmasi Admin</i>
                  </h4>
                ) : (
                  data.kursus.link.map((l, i) => {
                    return (
                      <ListGroup.Item key={i}>
                        <h6>{l.judul}</h6>
                        <p>
                          <i>{l.keterangan}</i>
                        </p>
                        <a
                          className="text-decoration-none text-light btn btn-dark card-hover"
                          rel="noreferrer"
                          target={"_blank"}
                          href={l.link}
                        >
                         Kunjungi link untuk melihat
                        </a>
                      </ListGroup.Item>
                    );
                  })
                )}
              </ListGroup>
            </Card>

            <Card className="ml-1 col-sm-12 col-lg-2">
              <ListGroup.Item>
                <h4 className="ml-2 p-1">Waktu</h4>
              </ListGroup.Item>
              <ListGroup
                variant="flush"
                className="custome-scroll"
                style={{ overflow: "auto", height: 500 }}
              >
                {data.kursus.jadwal.map((j, i) => {
                  return <ListGroup.Item key={i}>{j.hari} {" "} ({j.waktu}WIB)</ListGroup.Item>;
                })}
              </ListGroup>
            </Card>
          </div>
        </div>
        <Footer/>
        </>
      )}
    </>
  );
}

export default Belajar;
