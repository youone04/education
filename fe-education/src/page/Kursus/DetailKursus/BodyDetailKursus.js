import React from "react";
import FormAddLink from "./FormAddLink";
import ListLink from "./ListLink";
import SectionHeader from "./SectionHeader";

function BodyDetailKursus(props) {
  return (
    <>
      <div className="content-wrapper">
        <SectionHeader/>
        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Kursus Detail</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                  title="Collapse"
                >
                  <i className="fas fa-minus" />
                </button>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-12 col-md-12 col-lg-8 order-2 order-md-1">
                  <div className="row">
                    <div className="col-12 col-sm-4">
                      <div className="info-box bg-light">
                        <div className="info-box-content">
                          <span className="info-box-text text-center text-muted">
                            Estimated budget
                          </span>
                          <span className="info-box-number text-center text-muted mb-0">
                            2300
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="info-box bg-light">
                        <div className="info-box-content">
                          <span className="info-box-text text-center text-muted">
                            Total amount spent
                          </span>
                          <span className="info-box-number text-center text-muted mb-0">
                            2000
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="info-box bg-light">
                        <div className="info-box-content">
                          <span className="info-box-text text-center text-muted">
                            Estimated project duration
                          </span>
                          <span className="info-box-number text-center text-muted mb-0">
                            20
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <h4>{props.detailKursus.judul}</h4>
                      <div className="post">
                        <div className="col-12">
                          <img
                            className="img-bordered-lg"
                            style={{ width: "100%" }}
                            src={props.detailKursus.gambar}
                            alt="user image"
                          />
                        </div>
                        <p>{props.detailKursus.deskripsi}</p>
                      </div>
                      <div className="post clearfix">
                        <span className="username">
                          <h3>Waktu Kursus</h3>
                        </span>
                        {props.detailKursus.waktu.map((w, i) => {
                          return <h6 key={i}>{w.waktu} WIB</h6>;
                        })}
                      </div>
                      <div className="post">
                        <span className="username">
                          <h3>Hari Kursus</h3>
                        </span>
                        {props.detailKursus.hari.map((h, i) => {
                          return <h6 key={i}>{h.hari}</h6>;
                        })}
                      </div>
                      <div className="post">
                        <span className="username">
                          <h3>Syllabus Kursus</h3>
                        </span>
                        <a
                          href={props.detailKursus.syllabus}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-sm btn-primary"
                        >
                          Lihat Syllabus
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-4 order-1 order-md-2">
                  <h3 className="text-primary">
                    <i className="fas fa-paint-brush" /> Link Kursus
                  </h3>
                  <p className="text-muted">
                    Silahkan input link kursus setiap jadwal yang sudah ada
                  </p>
                  <br />
                  <FormAddLink data={props.detailKursus}/>
                  <ListLink detailKursus={props.detailKursus}/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default BodyDetailKursus;
