import { BrowserRouter, Routes, Route } from "react-router";
import { Login } from '../pages/Login';
import { CadastroCliente } from "../pages/CadastroCliente";

export const Router = () => {
    return (
       <BrowserRouter>
           <Routes>
               <Route path="/login" element={<Login />} />
                <Route path="*" element={<Login />} />
                <Route path="/cadastro" element={<CadastroCliente />} />
           </Routes>
       </BrowserRouter>
    )
}
