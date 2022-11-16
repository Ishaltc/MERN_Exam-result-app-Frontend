import { Route, Routes } from "react-router-dom";
import Home from "../Pages/User/Home";
import UserLogin from "../Pages/User/UserLogin";
import UserSignUp from "../Pages/User/UserSignUp";
import UserLoggedInRoutes from "../userProtectedRoutes/UserLoggedInRoutes";

export default function UserRouter() {
  return (
    <Routes>
      <Route>
        <Route path="/register" element={<UserSignUp />} exact />
        <Route path="/login" element={<UserLogin />} exact />
      </Route>
      <Route element={<UserLoggedInRoutes />} exact>
        <Route path="/" element={<Home />} exact />
      </Route>
    </Routes>
  );
}
