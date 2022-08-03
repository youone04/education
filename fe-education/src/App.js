import { Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "./components";
import Home from "./page/Home/Home";
import Login from "./page/Login/Login";
import RequireAuth from "./components/RequireAuth";
import Dashboard from "./page/Dashboard/Dashboard";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import PageNotFound from "./page/PageNotFound/PageNotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import Kursus from "./page/Kursus/ManageKursus/Kursus";
import TambahKursus from "./page/Kursus/TambahKursus/TambahKursus";

const ROLES = {
  Root: "root",
  Editor: "editor",
  Admin: "admin",
};

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public route */}
          <Route path="/" element={<Home />} />
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
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
          </Route>

          {/* catch page not found */}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
