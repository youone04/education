import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getKursusBeli } from "../../../redux/actions/actionKursusBeli/actionKursusBeli";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function UserHome() {
  const dispatch = useDispatch();
  const getKursusBeliData = useSelector((state) => state.dataKursusBeli);
  const getDataLogin = useSelector((state) => state.login);
  const { token } = getDataLogin.login;
  const { data, loading, error } = getKursusBeliData.kursusBeli;
  useEffect(() => {
    dispatch(getKursusBeli(token));
  }, [dispatch]);

  return (
    <>
      <div>UserHome</div>
      {loading ? (
        <p>loading</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="col-12 d-flex flex-row">
          {data.map((d, i) => {
            return (
              <Card className="m-1" key={i} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={d.kursus.gambar} />
                <Card.Body>
                  <Card.Title>{d.kursus.judul}</Card.Title>
                  <Card.Text>{d.kursus.deskripsi}</Card.Text>
                  <a
                    className="text-decoration-none btn btn-successs ml-1"
                    href={d.kursus.syllabus}
                    target="_blank"
                  >
                    Lihat Syllabus
                  </a>

                  <Link
                    className="text-decoration-none btn btn-success ml-1"
                    to={`/belajar/${d.id}`}
                  >
                    Mulai Belajar
                  </Link>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      )}
    </>
  );
}

export default UserHome;
