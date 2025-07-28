import { BrowserRouter, Routes, Route } from "react-router";
import { Login } from '../pages/Login';
import { CadastroCliente } from "../pages/CadastroCliente";
import { Catalogo } from "../pages/Catalogo";
import { Perfil } from "../pages/perfil";

export const Router = () => {
    return (
       <BrowserRouter>
           <Routes>
               <Route path="/login" element={<Login />} />
                <Route path="*" element={<Login />} />
                <Route path="/cadastro" element={<CadastroCliente />} />
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path="/perfil_user" element={<Perfil />} />
           </Routes>
       </BrowserRouter>
    )
}
