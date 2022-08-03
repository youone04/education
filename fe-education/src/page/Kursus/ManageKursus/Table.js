import { useNavigate } from "react-router-dom";

const Table = (props) => {
  const navigate = useNavigate();

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
              <button onClick={() => navigate(`/${props.tambah}`)} className="btn btn-primary mb-3">+ TAMBAH</button>
              <div className="card">
                <div className="card-header">
                  {/* <button className="btn btn-primary mb-3">+ TAMBAH</button> */}
                  <select
                    className="form-control col-lg-2"
                    style={{display: 'inline-block'}}
                    id="exampleFormControlSelect1"
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
                      />
                      <div className="input-group-append">
                        <button type="submit" className="btn btn-default">
                          <i className="fas fa-search" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <table
                    id="example2"
                    className="table table-bordered table-hover"
                  >
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Judul</th>
                        <th>Harga</th>
                        <th>Jam</th>
                        <th>Hari</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Trident</td>
                        <td>Internet Explorer 4.0</td>
                        <td>Win 95+</td>
                        <td> 4</td>
                        <td>X</td>
                      </tr>
                      <tr>
                        <td>Trident</td>
                        <td>Internet Explorer 5.0</td>
                        <td>Win 95+</td>
                        <td>5</td>
                        <td>C</td>
                      </tr>
                      <tr>
                        <td>Trident</td>
                        <td>Internet Explorer 5.5</td>
                        <td>Win 95+</td>
                        <td>5.5</td>
                        <td>A</td>
                      </tr>
                      <tr>
                        <td>Trident</td>
                        <td>Internet Explorer 6</td>
                        <td>Win 98+</td>
                        <td>6</td>
                        <td>A</td>
                      </tr>
                      <tr>
                        <td>Trident</td>
                        <td>Internet Explorer 7</td>
                        <td>Win XP SP2+</td>
                        <td>7</td>
                        <td>A</td>
                      </tr>
                      <tr>
                        <td>Trident</td>
                        <td>AOL browser (AOL desktop)</td>
                        <td>Win XP</td>
                        <td>6</td>
                        <td>A</td>
                      </tr>
                      <tr>
                        <td>Gecko</td>
                        <td>Firefox 1.0</td>
                        <td>Win 98+ / OSX.2+</td>
                        <td>1.7</td>
                        <td>A</td>
                      </tr>
                      <tr>
                        <td>Gecko</td>
                        <td>Firefox 1.5</td>
                        <td>Win 98+ / OSX.2+</td>
                        <td>1.8</td>
                        <td>A</td>
                      </tr>
                      <tr>
                        <td>Gecko</td>
                        <td>Firefox 2.0</td>
                        <td>Win 98+ / OSX.2+</td>
                        <td>1.8</td>
                        <td>A</td>
                      </tr>
                      <tr>
                        <td>Gecko</td>
                        <td>Firefox 3.0</td>
                        <td>Win 2k+ / OSX.3+</td>
                        <td>1.9</td>
                        <td>A</td>
                      </tr>
                      <tr>
                        <td>Gecko</td>
                        <td>Camino 1.0</td>
                        <td>OSX.2+</td>
                        <td>1.8</td>
                        <td>A</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>Rendering engine</th>
                        <th>Browser</th>
                        <th>Platform(s)</th>
                        <th>Engine version</th>
                        <th>CSS grade</th>
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
