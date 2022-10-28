import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import numberWithCommas from "../../../func/numberWithCommas";

function CardKursusDetail(props) {

  return (
    <div className="container mt-5">
      <Row xs={1} md={1} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <div className="d-flex col-12 row">
                <div className="col-sm-12 col-lg-6">
                <Card.Img
                  style={{ width: "100%", margin: 8 }}
                  variant="top"
                  src={props.data.gambar}
                />
                </div>
               <div className="col-lg-6 col-sm-12">
               <Card.Body>
                  <Card.Title>{props.data.judul}</Card.Title>
                  <Card.Text>
                    <i>{props.data.deskripsi}</i>
                  </Card.Text>
                  <hr />
                  <Card.Title>Jadwal</Card.Title>

                  <Card.Text>
                    {props.data.jadwal.map((j, i) => {
                      return (
                        <li>
                          {j.hari} ({j.waktu} WIB)
                        </li>
                      );
                    })}
                  </Card.Text>

                  <hr />
                  <b>Rp. {numberWithCommas(props.data.harga)}.-</b>
                  <div className="tombol-beli-kursus" style={{ float: "right" }}>
                    <Button
                      variant="dark"
                      onClick={
                        () =>
                        props.handleShowButton()
                      }
                    >
                      <i>Beli Kursus</i>
                    </Button>
                    <a
                      className="text-decoration-none btn btn-btn-dark ml-1"
                      href={props.data.syllabus}
                      target="_blank"
                    >
                      <i> Lihat Syllabus</i>
                    </a>
                  </div>
                </Card.Body>
               </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CardKursusDetail;
