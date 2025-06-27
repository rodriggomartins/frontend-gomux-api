import { Link } from "react-router"

export const Input = () => {
  return (
    <>
      <label className="text-mywhite-500 font-semibold">
        Nome
        <input type="text"
          placeholder="nome" className="bg-mywhite-500 text-center p-2 text-black-segund-600 rounded-sm m-4 outline-none"
        />
      </label>

      <label className="text-mywhite-500 font-semibold">
        Senha
        <input type="password" placeholder="*****" className="bg-mywhite-500 text-center p-2 text-black-segund-600 rounded-sm m-4 outline-none" />
      </label>
      <button className="bg-mywhite-500 text-black-segund-600 p-2 rounded-sm cursor-pointer m-4 w-69 ml-16 font-semibold">Entrar</button>
      <div className="">
        <span className="m-4 text-mywhite-500 font-semibold cursor-pointer">Recuperar senha</span>
        <span className="text-mywhite-500 border-t-mywhite-500 font-semibold cursor-pointer"><Link to='/cadastro'>Criar Conta</Link></span>
      </div>
    </>
  )
}
