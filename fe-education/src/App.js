import { store } from "../src/redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import Home from "./page/Home/Home";
import Login from "./page/Login/Login";
import RequireAuth from "./components/RequireAuth";
import Dashboard from "./page/Dashboard/Dashboard";
import PublicRoute from "./components/PublicRoute/PublicRoute";

const ROLES = {
  'Root': 'root',
  'Editor': 'editor',
  'Admin': 'admin'
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* public route */}
            <Route path="/" element={<Home />} />
            <Route element={<PublicRoute allowedRoles={[ROLES.Root, ROLES.Editor , ROLES.Admin]} />}>
            <Route path="/login" element={<Login />} />
            </Route>


            {/* private route */}
            <Route element={<RequireAuth allowedRoles={[ROLES.Root, ROLES.Editor , ROLES.Admin]} />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
