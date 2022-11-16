import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function NotLoggedInRoutes() {
  const { admin } = useSelector((state) => ({ ...state }));
  return admin ? <Navigate to="/admin/adminHome" /> : <Outlet />;
}
