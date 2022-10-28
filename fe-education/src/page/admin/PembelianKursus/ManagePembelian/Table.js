import numberWithCommas from "../../../../func/numberWithCommas";
import ModalImage from "react-modal-image";
import swal from "sweetalert";
import axios from "axios";
import { getPembelianAdmin } from "../../../../redux/actions/actionPembelian/actionPembelian";
import { useDispatch } from "react-redux";

const Table = (props) => {
  const dispatch = useDispatch();
  const handleKonfirmasiPembayaran =  (id , judul) => {
    swal({
      title: "Anda Yakin?",
      text: "Apakah anda yakin konfirmasi Kursus "+ judul+"?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then(async willDelete => {
      if (willDelete) {
        try {
          const konfirmasi = await axios.put(
            `${process.env.REACT_APP_END_POINT}/pembelian-admin/${id}`
          );
    
          if (konfirmasi.status === 200) {
            dispatch(getPembelianAdmin());
            return swal("success","success", "success");
           
          }
        } catch (error) {
          swal(
            "Gagal",
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
            "error"
          );
        }
      }
    });
    
  };
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
                        <th>Nama</th>
                        <th>Kursus</th>
                        <th>Harga</th>
                        <th>Bukti TF</th>
                        <th>Status</th>
                        <th>BATCH</th>
                        <th>Metode</th>
                        <th>Pemilik</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {props.data.map((d, i) => {
                        return (
                          <tr key={i}>
                            <td style={{ width: 2 }}>{(i = i + 1)}</td>
                            <td>{d.user.name}</td>
                            <td>
                              <i>{d.kursus.judul}</i>
                            </td>
                            <td>
                              Rp. <b>{numberWithCommas(d.kursus.harga )}</b>
                            </td>
                            <td style={{ width: 120 }}>
                              <ModalImage
                                small={d.bukti_pembayaran}
                                large={d.bukti_pembayaran}
                                alt="bayar"
                              />
                            </td>
                            <td>
                              {d.status ? (
                                <p className="text-success">ACC</p>
                              ) : (
                                <p className="text-warning">NOT</p>
                              )}
                            </td>
                            <td>{d.batch_pembelian}</td>
                            <td>{d.metode_pembayaran.nama_metode}</td>
                            <td>
                              <b>{d.kursus.user.name}</b>
                            </td>
                            <td>
                              <button className="bg-danger rounded mr-2">
                                hapus
                              </button>

                              <button
                                onClick={() => handleKonfirmasiPembayaran(d.id , d.kursus.judul)}
                                className="bg-success rounded"
                                disabled={d.status?true:false}
                              >
                                acc
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
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
