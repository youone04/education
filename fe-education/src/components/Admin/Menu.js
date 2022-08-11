import { Link} from "react-router-dom";
import {useState , memo } from "react";
import { Collapse } from "react-bootstrap";
const Menu = () => {
  const [username, setUserName] = useState("none");
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <>
      <aside className="main-sidebar elevation-4" style={{backgroundColor:'#00588A'}}>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User"
              />
            </div>
            <div className="info">
              <Link style={{color:'white',textDecoration:'none'}} to="/dashboard" className="d-block">
                {username}
              </Link>
            </div>
          </div>

          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item menu-open">
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/dashboard" className="nav-link active">
                      <p style={{color:'white'}}>Dashboard</p>
                    </Link>
                  </li>
                </ul>
              </li>

             
                 <a  style={{color:'white'}} onClick={() => setOpen(!open)} href="#!" className="nav-link">
                  <i  style={{color:'white'}} className="nav-icon fas fa-chart-pie mr-2" />
                  <p  style={{color:'white',marginRight: 80}}>
                    Kelola Data
                  </p>   
                  <i style={open?{transform:'rotate(-90deg)'}:{transform:'rotate(0deg)'}} className="fas fa-angle-left"></i>
                </a>
              <Collapse in={open}>
                <ul className="nav nav-treeviews row">
                  <li className="nav-item">
                    <Link to="/manage-kursus" className="nav-link">
                      <i  style={{color:'white'}} className="far fa-circle nav-icon mr-1" />
                      <p  style={{color:'white'}}>Kursus</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/pembelian-kursus" className="nav-link">
                      <i  style={{color:'white'}} className="far fa-circle nav-icon mr-1" />
                      <p  style={{color:'white'}}>Pembelian kursus</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/manage-anggota" className="nav-link">
                      <i  style={{color:'white'}} className="far fa-circle nav-icon mr-1" />
                      <p  style={{color:'white'}}>Anggota</p>
                    </Link>
                  </li>
                </ul>
              </Collapse>


              <li className="nav-item">
                <Link to="/manage-transaksi" className="nav-link">
                  <i style={{color:'white'}} className="nav-icon fas fa-tree" />
                  <p style={{color:'white'}}>Sirkulasi</p>
                </Link>
              </li>
              <li className="nav-item">
                <a  onClick={() => setOpen2(!open2)} style={{color:'white'}} href="#!" className="nav-link">
                  <i className="nav-icon fas fa-edit" />
                  <p>
                    Log Data
                    <i  style={open2?{transform:'rotate(-90deg)'}:{transform:'rotate(0deg)'}}  className="fas fa-angle-left right" />
                  </p>
                </a>
                <Collapse in={open2}>
                <ul className="nav nav-treeviews">
                  <li className="nav-item">
                    <Link to="/log-peminjaman" className="nav-link">
                      <i style={{color:'white'}} className="far fa-circle nav-icon" />
                      <p style={{color:'white'}}>Log Peminjaman</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/log-pengembalian" className="nav-link">
                      <i style={{color:'white'}} className="far fa-circle nav-icon" />
                      <p style={{color:'white'}}>Log Pengembalian</p>
                    </Link>
                  </li>
                </ul>
                </Collapse>
              </li>

              <li className="nav-item">
                <a  onClick={() => setOpen3(!open3)} href="#!!" className="nav-link">
                  <i style={{color:'white'}} className="nav-icon fas fa-table" />
                  <p style={{color:'white'}}>
                    Laporan
                    <i style={open3?{transform:'rotate(-90deg)'}:{transform:'rotate(0deg)'}}  className="fas fa-angle-left right" />
                  </p>
                </a>
                <Collapse in={open3}>
                <ul className="nav nav-treeviews">
                  <li className="nav-item">
                    <Link to="/laporan-denda" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p style={{color:'white'}}>Laporan Denda</p>
                    </Link>
                  </li>
                </ul>
                </Collapse>
              </li>
              <li className="nav-header" style={{color:'white'}}>Lainnya</li>
              <li className="nav-item">
                <Link to="/pengguna" className="nav-link">
                  <i style={{color:'white'}} className="nav-icon far fa-calendar-alt" />
                  <p style={{color:'white'}}>Pengguna System</p>
                </Link>
              </li>
              <li className="nav-item">
                <div
                  style={{ cursor: "pointer" }}
                  // onClick={handleLogout}
                  className="nav-link text-white"
                >
                  <i className="nav-icon far fa-user" />
                  <p>Log Out</p>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};
export default memo(Menu);
