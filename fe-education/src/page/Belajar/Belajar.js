import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector, useDispatch } from "react-redux";
import { getBelajar } from "../../redux/actions/actionBelajar/actionBelajar";

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
          <h2>Belajar</h2>
          <div className="d-flex">
            <Card className="col-6">
              <Card.Img variant="top" src={data.kursus.gambar} />
              <Card.Body>
                <Card.Title>
                  {data.kursus.judul} - {data.batch_pembelian}
                </Card.Title>
                <Card.Text>{data.kursus.deskripsi}</Card.Text>
              </Card.Body>
            </Card>
            <Card className="ml-1" style={{ width: "17rem" }}>
              <ListGroup.Item>
                <h3 className="ml-2">List Link</h3>
              </ListGroup.Item>
             
              <ListGroup
                variant="flush"
                className="custome-scroll"
                style={{ overflow: "auto", height: 500 }}
              >
                {!data.status? 
                <h4 className="text-center mt-5" style={{color:'#80808073'}}><i>Pembayaran Belum di Konfirmasi Admin</i></h4> 
                :
                data.kursus.link.map((l, i) => {
                  return (
                    <ListGroup.Item key={i}>
                      <h6>{l.judul}</h6>
                      <p>
                        <i>{l.keterangan}</i>
                      </p>
                      <a
                        className="text-decoration-none text-light btn btn-info"
                        rel="noreferrer"
                        target={"_blank"}
                        href={l.link}
                      >
                        Klik untuk Belajar via google meet
                      </a>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Card>

            <Card className="ml-1" style={{ width: "12rem" }}>
              <ListGroup.Item>
                <h4 className="ml-2">Waktu</h4>
              </ListGroup.Item>
              <ListGroup
                variant="flush"
                className="custome-scroll"
                style={{ overflow: "auto", height: 500 }}
              >
                <ListGroup.Item>{data.jadwal_waktu} WIB</ListGroup.Item>
              </ListGroup>
            </Card>
            <Card className="ml-1" style={{ width: "12rem" }}>
              <ListGroup.Item>
                <h4 className="ml-2">Hari</h4>
              </ListGroup.Item>
              <ListGroup
                variant="flush"
                className="custome-scroll"
                style={{ overflow: "auto", height: 500 }}
              >
                <ListGroup.Item>{data.jadwal_hari}</ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        </>
      )}
    </>
  );
}

export default Belajar;
