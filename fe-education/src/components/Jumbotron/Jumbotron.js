import React from "react";

function Jumbotron() {
  return (
    <div className="jumbotron text-white" style={{backgroundImage: `url('https://image.shutterstock.com/image-photo/workspace-office-desk-supplies-laptop-260nw-1364543876.jpg')`,backgroundRepeat:'no-repeat',backgroundSize:'cover', fontWeight:'bolder',fontFamily:'fantasy'}}>
      <h1 className="display-6">Apa itu education IDN?</h1>
      <p className="lead text-keterangan">
        education IDN adalah sebuah platform pembelajaran atau tutorial yang
        dilakukan secara daring(onilne) yang dimana pengajaran dilakukan secara
        tatap muka dengan menggunakan google meet/Zoom. Jadwal sudah tertera
        pada item kursus silahkan anda sesuaikan dengan waktu kosong anda.
      </p>
      <hr className="my-4" />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <a className="btn btn-light btn-lg mb-5" href="#" role="button">
        List kursus
      </a>
    </div>
  );
}

export default Jumbotron;
