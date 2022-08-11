import { Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import Home from "./page/public/Home/Home";
import Login from "./page/public/LoginAdmin/LoginAdmin";
import RequireAuth from "./components/RequireAuth";
import Dashboard from "./page/admin/Dashboard/Dashboard";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import PageNotFound from "./page/public/PageNotFound/PageNotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import Kursus from "./page/admin/Kursus/ManageKursus/Kursus";
import TambahKursus from "./page/admin/Kursus/TambahKursus/TambahKursus";
import DetailKursus from "./page/admin/Kursus/DetailKursus/DetailKursus";
import UserHome from "./page/user/UserHome/UserHome";
import Belajar from "./page/user/Belajar/Belajar";
import PembelianKursus from "./page/admin/PembelianKursus/PembelianKursus";

const ROLES = {
  Root: "root",
  Editor: "editor",
  Admin: "admin",
  User : "user"
};

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public route */}
          <Route path="/" element={<Home />} />
          <Route element={<PublicRoute />}>
            <Route path="/login-admin" element={<Login />} />
          </Route>

          {/* private route */}
          <Route
            element={
              <RequireAuth
                allowedRoles={[ROLES.Root, ROLES.Editor, ROLES.Admin]}
              />
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/manage-kursus" element={<Kursus />} />
            <Route path="/tambah-kursus" element={<TambahKursus />} />
            <Route path="/detail-kursus/:id" element={<DetailKursus />} />
            <Route path="/pembelian-kursus" element={<PembelianKursus/>}/>
          </Route>

          <Route
            element={
              <RequireAuth
                allowedRoles={[ROLES.User]}
              />
            }
          >
             <Route path="/user" element={<UserHome />} />
             <Route path="/belajar/:id" element={<Belajar />} />
          </Route>

          {/* catch page not found */}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
