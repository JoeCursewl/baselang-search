import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Index from "./pages";
import Profile from "./pages/Profile";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";
import Contratos from "./Contratos/contratos";
import Login from "./Login/login";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
        <ProtectedRoutes>
          <Index />
        </ProtectedRoutes>
        } />
        <Route path="/tsp/:text" element={
        <ProtectedRoutes>
          <Profile />
        </ProtectedRoutes>} />
        <Route path="/login" element={<Login />} />
        <Route path="/contrato/:id_contrato" element={
          <ProtectedRoutes>
            <Contratos />
          </ProtectedRoutes>
        } />
        <Route path="*" element={<Navigate to={"/"}/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}