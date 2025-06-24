import { Link } from "react-router"

export const Input =() => {
  return(
    <div className="flex flex-col items-center h-100 w-auto font-mypoppins">

      <div className="font-mypoppins flex flex-col items-center p-4">

        <label>Nome</label>
        <input type="text" placeholder="Seu nome" className="border border-myborder-600 rounded-sm mt-3 p-2 w-90 ml-2 outline-none" />

        <label className="mt-3">Email</label>
        <input type="email" placeholder="email@email.com" className="border border-myborder-600 rounded-sm mt-3 p-2 w-90 ml-2 outline-none" />
        
        <label className="mt-3">Senha</label>
        <input type="password" placeholder="senha" className="border border-myborder-600 rounded-sm p-2 mt-3 ml-2 outline-none w-90" />

        <label className="mt-3">Repetir senha</label>
        <input type="password" placeholder="confirmar senha" className="border border-myborder-600 rounded-sm p-2 mt-3 ml-2 outline-none w-90" />
        <div className="flex w-auto h-auto items-center justify-center mt-3">
          <button className="bg-mygreen-600 text-center m-3 p-2 text-mywhite-500 rounded-sm cursor-pointer border border-mywhite-500 w-30">Cadastrar</button>
          <button className="bg-red-600 text-center m-3 p-2 text-mywhite-500 rounded-sm cursor-pointer border border-mywhite-500 w-30">
           <Link to="/login">Cancelar</Link>
          </button>
        </div>

      </div>

    </div>
  )
}
