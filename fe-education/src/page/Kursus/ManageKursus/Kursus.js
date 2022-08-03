import React from "react";
import Footer from "../../../components/Admin/Footer";
import Header from "../../../components/Admin/Header";
import Menu from "../../../components/Admin/Menu";
import Table from "./Table";

function Kursus() {
  return (
    <>
      <Header />
      <Menu />
      <Table title={'kursus'} tambah={'tambah-kursus'}/>
      <Footer />
    </>
  );
}

export default Kursus;
