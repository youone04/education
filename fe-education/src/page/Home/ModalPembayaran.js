import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import swal from "sweetalert";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function ModalPembayaran(props) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleBeli = async (data) => {
   
    try {
      props.onHide();
      if (!props.token) return swal("warning", "Silahkan Login", "warning");
      const { userId } = jwtDecode(props.token);
      const response = await axios.post(
        `${process.env.REACT_APP_END_POINT}/pembelian/${userId}/${props.jadwal.id}`,data
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
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Pilih Jadwal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Waktu</h4>
        <Form.Select {...register("jadwal_waktu")} aria-label="Default select example">
          <option value="">Pilih waktu</option>
          {props.jadwal?.waktu?.map((w, i) => {
            return (
              <option key={i} value={w.waktu}>
                {w.waktu} WIB
              </option>
            );
          })}
        </Form.Select>
        <hr />
        <h4>Hari</h4>
        <Form.Select {...register("jadwal_hari")} aria-label="Default select example">
          <option>Pilih hari</option>
          {props.jadwal?.hari?.map((h, i) => {
            return (
              <option key={i} value={h.hari}>
                {h.hari}
              </option>
            );
          })}
        </Form.Select>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit(handleBeli)}>SIMPAN</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalPembayaran;
