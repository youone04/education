import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import swal from "sweetalert";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ModalImage from "react-modal-image";
import numberWithCommas from "../../../func/numberWithCommas";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ModalPembayaran(props) {
  const navigate = useNavigate();
  const [metodeBayar, setMetodeBayar] = useState(
    props.metode[0] ? props.metode[0].id : 1
  );
  const [show, setShow] = useState(false);
  const [dataGambar, setDataGambar] = useState(null);
  const [previewGambar, setPreviewGambar] = useState(
    "https://redzonekickboxing.com/wp-content/uploads/2017/04/default-image-620x600.jpg"
  );

  const handleBeli = async () => {
    if (!dataGambar)
      return swal("Failed", "Form Gambar Tidak Boleh Kosong!", "warning");
    if (
      !["jpeg", "png", "jpg"].includes(
        dataGambar.target.files[0].type.split("/")[1]
      )
    )
      return swal("Failed", "Extenion Gambar Harus Sesuai", "warning");
    if (dataGambar.target.files[0].size > 2014288)
      return swal("Failed", "Ukuran File Maksimal 2MB", "warning");
    if (!props.token)
      return swal("warning", "Pembelian Gagal ,Silahkan Login", "warning");
    props.onHide();

    const gambar =
      "http://localhost:8800/pembayaran/pembayaran" +
      "--" +
      dataGambar.target.files[0].name;

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          withCredentials: true,
        },
        onUploadProgress: (event) => {},
      };
      const formDataGambar = new FormData();
      // const fileName = Date.now() + dataGambar.target.files[0].name;
      formDataGambar.append("gambar", dataGambar.target.files[0]);
      // formDataGambar.append("nama", fileName);
      await axios.post(
        `${process.env.REACT_APP_END_POINT}/upload-pembayaran`,
        formDataGambar,
        config
      );
    } catch (error) {
      return swal(
        "error",
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
        "error"
      );
    }

    try {
      const role = jwtDecode(props.token);
      const cekRole = role.role.filter((r) => r === "user");
      if (cekRole.length <= 0)
        return swal(
          "warning",
          "Pembelian Gagal ,Silahkan login dengan akun user",
          "warning"
        );
      const dataSend = {
        bukti_pembayaran: gambar,
      };
      const { userId } = jwtDecode(props.token);
      const response = await axios.post(
        `${process.env.REACT_APP_END_POINT}/pembelian/${userId}/${props.data.id}/${metodeBayar}`,
        dataSend
      );

      if (response.status === 200) {
        swal("success", "Pembelian Berhasil", "success");
        navigate("/user");
      }
    } catch (error) {
      swal(
        "Failed",
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
        "error"
      );
    }
  };

  const handleSelect = (key) => {
    setMetodeBayar(key);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast("Berhasil Copy");
    setShow(!show);
  };

  useEffect(() => {
    setTimeout(function () {
      setShow(false);
    }, 1500);
  }, [show]);

  useEffect(() => {
    if (!dataGambar) {
      setPreviewGambar(
        "https://redzonekickboxing.com/wp-content/uploads/2017/04/default-image-620x600.jpg"
      );
      return;
    }
    const objectUrl = URL.createObjectURL(dataGambar.target.files[0]);
    setPreviewGambar(objectUrl);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [dataGambar]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Pembelian Kursus
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ToastContainer
          autoClose={1000}
          hideProgressBar={true}
          newestOnTop={false}
        />
        <Form.Group controlId="formFile" className="mb-3">
          <Tabs
            defaultActiveKey="1"
            id="uncontrolled-tab-example"
            className="mb-3"
            onSelect={handleSelect}
          >
            {props.metode.map((m, i) => {
              return (
                <Tab key={i} eventKey={m.id} title={m.nama_metode}>
                  <span className="d-flex">
                    <i>
                      {" "}
                      No Pembayaran :
                      <b>
                        {" "}
                        <u>{m.no_pembayaran}</u>
                      </b>
                      {"  "} A.N Education IDN
                    </i>
                    <i
                      onClick={() =>copyToClipboard(m.no_pembayaran)}
                      style={{ marginLeft: "auto", cursor: "pointer" }}
                      className="fa fa-copy"
                    />
                  </span>
                </Tab>
              );
            })}
          </Tabs>

          <hr />
          <tr>
            <td>Harga </td>
            <td>
              : <b>Rp. {numberWithCommas(props.data.harga)}</b>
            </td>
          </tr>
          <tr>
            <td>Nama kursus</td>
            <td>
              : <b>{props.data.judul}</b>
            </td>
          </tr>
          <hr />
          <Form.Label>Bukti Transfer</Form.Label>
          <Form.Control onChange={(e) => setDataGambar(e)} type="file" />
          <i className="text-success">
            Pastikan nominal sesuai dengan harga yang ada di atas
          </i>
          <div>
            <ModalImage
              className="img-pembayaran"
              small={previewGambar}
              large={previewGambar}
              alt="bayar"
            />
          </div>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleBeli}>SIMPAN</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalPembayaran;
