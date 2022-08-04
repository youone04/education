import React from "react";
import { useNavigate } from "react-router-dom";
function FormKursus(props) {
  const navigate = useNavigate();

  // form waktu
  const addFormhari = () => {
    props.setHari([...props.varHari, { hari: "" }]);
  };

  const removeFormhari = (i) => {
    const newFormValue = [...props.varHari];
    newFormValue.splice(i, 1);
    props.setHari(newFormValue);
  };

  const handleChangeHari = (event) => {
    const updateHari = [...props.varHari];
    updateHari[event.target.dataset.id][event.target.className.split(" ")[0]] =
      event.target.value;
    props.setHari(updateHari);
  };

  // form Hari
  const addFormWaktu = () => {
    props.setWaktu([...props.varWaktu, { waktu: "" }]);
  };

  const removeFormWaktu = (i) => {
    const newFormValue = [...props.varWaktu];
    newFormValue.splice(i, 1);
    props.setWaktu(newFormValue);
  };

  const handleChangeWaktu = (event) => {
    const updateWaktu = [...props.varWaktu];
    updateWaktu[event.target.dataset.id][event.target.className.split(" ")[0]] =
      event.target.value;
    props.setWaktu(updateWaktu);
  };

  return (
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Tambah Kursus</h3>
              </div>
              <form
                onSubmit={props.handleSubmit(props.onSubmit)}
                id="quickForm"
              >
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="kursus">Judul Kursus</label>
                    <input
                      type="text"
                      name="kursus"
                      className="form-control"
                      id="kursus"
                      placeholder="Kursus"
                      {...props.register("judul")}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="harga">Harga Kursus</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">Rp</span>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        {...props.register("harga")}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="deskripsi">Deskripsi Kursus</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Enter ..."
                      {...props.register("deskripsi")}
                    ></textarea>
                  </div>

                  {props.varHari.map((d, i) => {
                    const hariNama = `hari-${i}`;
                    return (
                      <div key={i} className="form-group">
                        <label>Hari Kursus</label>
                        <select
                          onChange={handleChangeHari}
                          multiple
                          data-id={i}
                          className="hari form-control"
                          name={hariNama}
                          id={hariNama}
                        >
                          <option value={"jumat"}>jumat</option>
                          <option value={"sabtu"}>sabtu</option>
                          <option value={"minggu"}>minggu</option>
                        </select>
                        <button
                          type="button"
                          className="bg-success rounded mt-1"
                          onClick={addFormhari}
                        >
                          +
                        </button>
                        {i ? (
                          <button
                            type="button"
                            className="bg-danger rounded m-1"
                            onClick={removeFormhari}
                          >
                            -
                          </button>
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  })}

                  {props.varWaktu.map((d, i) => {
                    const waktuNama = `waktu-${i}`;
                    return (
                      <div key={i} className="form-group">
                        <label>Jam Kursus</label>
                        <select
                          multiple
                          data-id={i}
                          className="waktu form-control"
                          name={waktuNama}
                          id={waktuNama}
                          onChange={handleChangeWaktu}
                        >
                          <option value={"19:00 - 21:00"}>
                            19:00 - 21:00 WIB
                          </option>
                          <option value={"08:00 - 10:00"}>
                            08:00 - 10:00 WIB
                          </option>
                          <option value={"15:00 - 17:00"}>
                            15:00 - 17:00 WIB
                          </option>
                        </select>
                        <button
                          type="button"
                          className="bg-success rounded mt-1"
                          onClick={addFormWaktu}
                        >
                          +
                        </button>
                        {i ? (
                          <button
                            type="button"
                            className="bg-danger rounded m-1"
                            onClick={removeFormWaktu}
                          >
                            -
                          </button>
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  })}

                  <div className="form-group">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="customFile"
                        onChange={(e) => props.setDataGambar(e)}
                      />
                      <label className="custom-file-label" htmlFor="customFile">
                        Pilih gambar
                      </label>
                      <img
                        style={{ width: "20%", margin: 5, marginBottom: 25 }}
                        src={props.previewGambar}
                        alt="gambar"
                      />
                    </div>
                  </div>
                  <div className="form-group mt-5 pt-5">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="customFile"
                        {...props.register("syllabus")}
                      />
                      <label className="custom-file-label" htmlFor="customFile">
                        Pilih file
                      </label>
                    </div>
                  </div>
                </div>

                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">
                    <i className="fas fa-save mr-2"></i>SIMPAN
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/manage-kursus")}
                    className="btn btn-success"
                    style={{ marginLeft: 5 }}
                  >
                    <i className="fas fa-arrow-right mr-2"></i>KEMBALI
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </section>
  );
}

export default FormKursus;
