import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getKursusPublic } from "../../redux/actions/actionKursusPublic/actionKursusPublic";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Home() {
  const dispatch = useDispatch();
  const getKursusPublicData = useSelector((state) => state.dataKursusPublic);
  const { data, loading, error } = getKursusPublicData.kursusPublic;

  useEffect(() => {
    dispatch(getKursusPublic());
  }, [dispatch]);

  console.log(data);

  return (
    <>
    {
      loading?
      <p>loading</p>:
      error?
      <p>{error}</p>
      :
      <>
      <div>Home</div>
      {
        data.map((k, i) => {
          return (
            <Card key={i} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={k.gambar} />
              <Card.Body>
                <Card.Title>{k.judul}</Card.Title>
                <Card.Text>
                 {k.deskripsi}
                </Card.Text>
                <Button variant="primary">Beli Kursus</Button>
                <a className="text-decoration-none btn -btn-success ml-1" href={k.syllabus} target="_blank">Lihat Syllabus</a>
              </Card.Body>
            </Card>
          );
        })
      }
      </>
    }
     
    </>
  );
}
