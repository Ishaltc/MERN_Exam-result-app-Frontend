import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";



export default function UserLoggedInRoutes(){
    const {user} = useSelector((state)=>({...state}))

    return user ? <Outlet/> :<Navigate to="/login"/>
}