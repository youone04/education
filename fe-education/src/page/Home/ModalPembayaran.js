import React, { useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import swal from "sweetalert";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function ModalPembayaran(props) {
  const navigate = useNavigate();
  const [metodeBayar, setMetodeBayar] = useState(props.metode[0].id);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleBeli = async (data) => {
    try {
      props.onHide();
      if (!props.token) return swal("warning", "Pembelian Gagal ,Silahkan Login", "warning");
      const role =  jwtDecode(props.token);
      const cekRole =  role.role.filter((r) => r === 'user');
      if(cekRole.length <= 0) return swal("warning", "Pembelian Gagal ,Silahkan login dengan akun user", "warning");
      return
      const { userId } = jwtDecode(props.token);
      const response = await axios.post(
        `${process.env.REACT_APP_END_POINT}/pembelian/${userId}/${props.jadwal.id}`);

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
        <Form.Group controlId="formFile" className="mb-3">
          <Tabs
            defaultActiveKey="1"
            id="uncontrolled-tab-example"
            className="mb-3"
            onSelect={handleSelect}
          >
            {props.metode.map((m, i) => {
              return (
                <Tab eventKey={m.id} title={m.nama_metode}>
                  <b>
                    <i> No Pembayaran : <u>764734577</u></i>
                  </b>
                </Tab>
              );
            })}
          </Tabs>
          <hr />
          <table>
            <tr>
              <td>Harga </td>
              <td>
                : <b>Rp. {props.jadwal.harga}</b>
              </td>
            </tr>
            <tr>
              <td>Nama kursus</td>
              <td>
                : <b>{props.jadwal.judul}</b>
              </td>
            </tr>
          </table>
          <hr />
          <Form.Label>Bukti Transfer</Form.Label>
          <Form.Control type="file" {...register("bukti_bayar")} />
          <i className="text-success">
            Pastikan nominal sesuai dengan harga yang ada di atas
          </i>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit(handleBeli)}>SIMPAN</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalPembayaran;
