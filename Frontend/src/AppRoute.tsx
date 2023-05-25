import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/Login" />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="*" element={<Navigate to="/Login" />} />
            </Routes>
        </BrowserRouter>
    )
}