import React, { useEffect, useState } from "react";
import Footer from "../../../../components/Admin/Footer";
import Header from "../../../../components/Admin/Header";
import Menu from "../../../../components/Admin/Menu";
import FormKursus from "./FormKursus";
import SectionHeader from "./SectionHeader";
import { useForm } from "react-hook-form";
import axios from "axios";
import SweetAlert from "sweetalert";
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";

function TambahKursus() {
  const getDataLogin = useSelector((state) => state.login);
  const { token } = getDataLogin.login;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [dataGambar, setDataGambar] = useState(null);
  const [previewGambar, setPreviewGambar] = useState(
    "https://redzonekickboxing.com/wp-content/uploads/2017/04/default-image-620x600.jpg"
  );
  // multiple jadwal
  const [varJadwal, setJadwal] = useState([
    {
      hari: "",
      waktu: "",
    },
  ]);

  const onSubmit = async (data) => {

    const cekJadwal = varJadwal.filter((d) => d.waktu != "" || d.hari != "");
    if (cekJadwal.length === 0)
      return SweetAlert("Failed", "Form Jadwal Tidak Boleh Kosong!", "warning");
    // cek file empty?
    if (!data.syllabus[0] || !dataGambar)
      return SweetAlert("Failed", "Semua Data File Harus di Input!", "warning");
    // cek extnsion file gambar
    if (
      !["jpeg", "png", "jpg"].includes(
        dataGambar.target.files[0].type.split("/")[1]
      )
    )
      return SweetAlert("Failed", "Extenion Gambar Harus Sesuai", "warning");
    // cek extnsion file pdf
    if (data.syllabus[0].type.split("/")[1] !== "pdf")
      return SweetAlert("Failed", "Extenion File Harus Sesuai", "warning");
    // cek size file
    if (
      data.syllabus[0].size > 2014288 ||
      dataGambar.target.files[0].size > 2014288
    )
      return SweetAlert("Failed", "Ukuran File Maksimal 2MB", "warning");
  
    const hasilUploadPdf = new Promise(async(resolve , reject) => {
      try {
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
            withCredentials: true,
          },
          onUploadProgress: (event) => {},
        };
        const formDataPDF = new FormData();
        formDataPDF.append("pdf", data.syllabus[0]);
       const padfCloud =  await axios.post(
          `${process.env.REACT_APP_END_POINT}/upload-pdf-cloud`,
          formDataPDF,
          config
        );
        resolve(padfCloud.data.data)
      } catch (error) {
        return SweetAlert(
          "error",
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
          "error"
        );
      }
    })


    const hasilUploadGambar = new Promise(async(resolve , reject) => {
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
        const gambarCloud =  await axios.post(
          `${process.env.REACT_APP_END_POINT}/upload-image-cloud`,
          formDataGambar,
          config
        );
        resolve(gambarCloud.data)
      } catch (error) {
        return SweetAlert(
          "error",
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
          "error"
        );
      }
    })

    const gambar = await hasilUploadGambar;
    data.syllabus = await hasilUploadPdf;
    try {
      const userId = jwtDecode(token).userId;
      const dataSend = {
        ...data,
        gambar: gambar.data,
        userId,
        jadwal: cekJadwal,
      };
      const hasil = await axios.post(
        `${process.env.REACT_APP_END_POINT}/kursus`,
        dataSend
      );
      if (hasil.status === 200)
        return SweetAlert("success", "Success", "success");
    } catch (error) {
      return SweetAlert("error",  error.response && error.response.data.message
      ? error.response.data.message
      : error.message, "error");
    }
  };

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
    <>
      <Header />
      <Menu />
      <div className="content-wrapper">
        <SectionHeader />
        <FormKursus
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          dataGambar={dataGambar}
          setDataGambar={setDataGambar}
          previewGambar={previewGambar}
          errors={errors}
          setJadwal={setJadwal}
          varJadwal={varJadwal}
        />
      </div>
      <Footer />
    </>
  );
}

export default TambahKursus;
