import React, { useEffect , useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getKursusPublic } from "../../../redux/actions/actionKursusPublic/actionKursusPublic";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ModalPembayaran from "./ModalPembayaran";
import { getToken } from "../../../redux/actions/actionLogin";
import { getMetodePembayaran } from "../../../redux/actions/actionMetodePembayaran/actionMetodePembayaran";
import numberWithCommas from "../../../func/numberWithCommas";

export default function Home() {

  const dispatch = useDispatch();
  const getKursusPublicData = useSelector((state) => state.dataKursusPublic);
  const { data, loading, error } = getKursusPublicData.kursusPublic;
  const getDataLogin = useSelector((state) => state.login);
  const getMetodePem = useSelector((state) => state.dataMetodePembayaran);
  const { data : dataMetodePembayaran, loading: loadingMetodePem , error : errorMetodePem } = getMetodePem.metodePembayaran;
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
    setDataJadwal(data)
  };

  return (
    <>
      {loading || loadingMetodePem ? (
        <p>loading</p>
      ) : error || errorMetodePem ? (
        <p>{error || errorMetodePem}</p>
      ) : (
        <>
          <div>Home</div>
          <ModalPembayaran
            token={token}
            jadwal={jadwal}
            show={modalShow}
            metode ={dataMetodePembayaran}
            onHide={() => setModalShow(false)}
          />
          <div className="d-flex">
          {data.map((k, i) => {
            return (
              <Card className="m-2" key={i} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={k.gambar} />
                <Card.Body>
                  <Card.Title>{k.judul}</Card.Title>
                  <Card.Text>{k.deskripsi}</Card.Text>
                  <h5>Rp. {numberWithCommas(k.harga)}</h5>
                  <>
                    <Button
                      variant="primary"
                      onClick={() => handleShowButton({harga : numberWithCommas(k.harga) ,  id:k.id , judul : k.judul})}
                    >
                      Beli Kursus
                    </Button>
                  </>
                  <a
                    className="text-decoration-none btn -btn-success ml-1"
                    href={k.syllabus}
                    target="_blank"
                  >
                    Lihat Syllabus
                  </a>
                </Card.Body>
              </Card>
              
            );
          })}
          </div>
        </>
      )}
    </>
  );
}
