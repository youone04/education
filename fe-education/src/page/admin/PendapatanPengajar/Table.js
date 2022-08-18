import numberWithCommas from "../../../func/numberWithCommas";

const Table = (props) => {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>{props.title}</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#!">Home</a>
                </li>
                <li className="breadcrumb-item active">{props.title}</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <select
                    className="form-control col-lg-2"
                    style={{ display: "inline-block" }}
                    id="exampleFormControlSelect1"
                    disabled
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                  <select
                    className="form-control col-lg-2 m-2"
                    style={{ display: "inline-block" }}
                    id="exampleFormControlSelect1"
                    onChange={props.handleChangeBatch}
                  >
                    {[
                      ...new Map(
                        props.batch.map((item) => [item.batchColum, item])
                      ).values(),
                    ].map((d, i) => {
                      return (
                        <option key={i} value={d.batchColum}>
                          {d.batchColum}
                        </option>
                      );
                    })}
                  </select>

                  <div className="card-tools">
                    <div
                      className="input-group input-group-sm"
                      style={{ width: 150 }}
                    >
                      <input
                        type="text"
                        name="table_search"
                        className="form-control float-right"
                        placeholder="Search"
                        disabled
                      />
                      <div className="input-group-append">
                        <button type="submit" className="btn btn-default">
                          <i className="fas fa-search" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body table-responsive">
                  <table
                    id="example2"
                    className="table table-bordered table-hover"
                  >
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Nama Pemilik</th>
                        <th>Kursus</th>
                        <th>Harga</th>
                        <th>Status</th>
                        <th>BATCH</th>
                      </tr>
                    </thead>
                    <tbody>
                      {props.data.pendapatan.map((d, i) => {
                        return (
                          <tr key={i}>
                            <td style={{ width: 2 }}>{(i = i + 1)}</td>
                            <td>
                              <b>{d.kursus.user.name}</b>
                            </td>
                            <td>
                              <i>{d.kursus.judul}</i>
                            </td>
                            <td>
                              Rp. <b>{numberWithCommas(d.kursus.harga)}</b>
                            </td>
                            <td>
                              <i>{d.status ? <p>ACC</p> : <p>NOT ACC</p>}</i>
                            </td>
                            <td>{d.batch_pembelian}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot>
                      <tr className="bg-primary" style={{ border: "none" }}>
                        <th style={{ width: "15%" }}>Total Pendapatan</th>
                        <th></th>
                        <th></th>
                        <th>Rp. {numberWithCommas(props.data.totalHarga)}</th>
                        <th></th>
                        <th></th>
                      </tr>
                      <tr className="bg-warning" style={{ border: "none" }}>
                        <th style={{ width: "15%" }}>Potongan</th>
                        <th></th>
                        <th></th>
                        <th>30%</th>
                        <th></th>
                        <th></th>
                      </tr>
                      <tr className="bg-success" style={{ border: "none" }}>
                        <th style={{ width: "15%" }}>Gaji</th>
                        <th></th>
                        <th></th>
                        <th>Rp. {numberWithCommas(props.data.totalHarga - ((props.data.totalHarga * 30)/100))}</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Table;
