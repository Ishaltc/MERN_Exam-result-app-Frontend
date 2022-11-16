import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


export default function LoggedInRoutes(){
    const {admin} = useSelector((state)=>({...state}))
    return admin ? <Outlet/> : <Navigate to ="/admin"/>
}