import { Route, Routes } from "react-router-dom";
import LoggedInRoutes from "../adminProtectedRoutes/LoggedInRoutes";
import NotLoggedInRoutes from "../adminProtectedRoutes/NotLoggedInRoutes";
import AddMarkInfo from "../components/AddMarkInfo";
import EditModel from "../components/EditModel";

import AdminHome from "../Pages/Admin/AdminHome";
import AdminLogin from "../Pages/Admin/Login";

export default function AdminRouter() {
  return (
    <Routes>
      <Route element={<NotLoggedInRoutes />}>
        <Route path="/" element={<AdminLogin />} exact />
      </Route>
      <Route element={<LoggedInRoutes />}>
        <Route path="/adminHome" element={<AdminHome />} exact />

        <Route path="/addMarkInfo" element={<AddMarkInfo />} exact />

        <Route path="/editModel" element={<EditModel />} exact />
      </Route>
    </Routes>
  );
}
