import React, { useEffect , useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getKursusPublic } from "../../redux/actions/actionKursusPublic/actionKursusPublic";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ModalPembayaran from "./ModalPembayaran";
import { getToken } from "../../redux/actions/actionLogin";

export default function Home() {

  const dispatch = useDispatch();
  const getKursusPublicData = useSelector((state) => state.dataKursusPublic);
  const { data, loading, error } = getKursusPublicData.kursusPublic;
  const getDataLogin = useSelector((state) => state.login);
  const { token } = getDataLogin.login;

  useEffect(() => {
    dispatch(getKursusPublic());
    dispatch(getToken());
  }, [dispatch]);

  const [modalShow, setModalShow] = useState(false);
  const [jadwal, setDataJadwal] = useState([]);

  const handleShowButton = (data) => {
    setModalShow(true);
    setDataJadwal(data)
  };

  const numberWithCommas = (x) => {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <>
      {loading ? (
        <p>loading</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <div>Home</div>
          <ModalPembayaran
            token={token}
            jadwal={jadwal}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          {data.map((k, i) => {
            return (
              <Card key={i} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={k.gambar} />
                <Card.Body>
                  <Card.Title>{k.judul}</Card.Title>
                  <Card.Text>{k.deskripsi}</Card.Text>
                  <h5>Rp. {numberWithCommas(k.harga)}</h5>
                  <>
                    <Button
                      variant="primary"
                      onClick={() => handleShowButton({waktu : k.waktu , hari: k.hari , id:k.id})}
                    >
                      Beli Kursus
                    </Button>
                  </>

                  {/* <Button variant="primary">Beli Kursus</Button> */}
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
        </>
      )}
    </>
  );
}
