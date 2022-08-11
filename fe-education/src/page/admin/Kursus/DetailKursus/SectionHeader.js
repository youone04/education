import React, { memo } from "react";

function SectionHeader() {
  return (
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>{"Kursus Detail"}</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <a href="#!!">Home</a>
              </li>
              <li className="breadcrumb-item active">{"judul"}</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(SectionHeader);
