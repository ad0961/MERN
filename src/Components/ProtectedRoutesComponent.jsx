import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoutesComponent(){
    const login = false;
    return login ? <Outlet /> : <Navigate to="/login" />
}