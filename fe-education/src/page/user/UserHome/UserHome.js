import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getKursusBeli } from "../../../redux/actions/actionKursusBeli/actionKursusBeli";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import NavbarComp from "../../../components/NavbarComp/NavbarComp";
import Footer from "../../../components/Footer/Footer";

function UserHome() {
  const dispatch = useDispatch();
  const getKursusBeliData = useSelector((state) => state.dataKursusBeli);
  const getDataLogin = useSelector((state) => state.login);
  const { token } = getDataLogin.login;
  const { data, loading, error } = getKursusBeliData.kursusBeli;
  useEffect(() => {
    dispatch(getKursusBeli(token));
  }, [dispatch ,token]);

  return (
    <div>
      {loading ? (
        <p>loading</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
        <NavbarComp/>
        <div className="container">
          <h3 className="text-center mt-5">List Kursus</h3>
          <hr/>
        <div className="d-flex mt-3 row">
          {data.map((d, i) => {
            return (
              <Card className="m-1 card-hover col-sm-12 col-lg-4 mt-3" key={i}>
                <Card.Img variant="top" src={d.kursus.gambar} />
                <Card.Body>
                  <Card.Title>{d.kursus.judul}</Card.Title>
                  <Card.Text>{d.kursus.deskripsi.slice(0, 80)}</Card.Text>
                  <a
                  style={{backgroundColor:'gray'}}
                    className="text-decoration-none btn ml-1 text-white"
                    href={d.kursus.syllabus}
                    target="_blank"
                    rel="noreferrer"
                    
                  >
                    Lihat Syllabus
                  </a>

                  <Link
                    className="text-decoration-none btn btn-dark ml-1"
                    to={`/belajar/${d.id}`}
                  >
                    Mulai Belajar
                  </Link>
                </Card.Body>
              </Card>
            );
          })
          }
        </div>
        </div>
        <Footer/>
        </>
      )
      }
    </div>
  );

}

export default UserHome;
