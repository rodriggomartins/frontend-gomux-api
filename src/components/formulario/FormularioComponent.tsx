import { Link } from "react-router"

export const FormularioComponent = () => {
  return (
    <div>
      <div className="bg-myblack-600 text-mywhite-500 p-5 text-center font-mypoppins">
        <h3 className="text-newwhite-600">Registro Cliente</h3>
      </div>
      <div className="border boder-red-600 p-3">
        <form className="flex flex-col bg-mywhite-500">
          <label>
            Nome
            <input type="text" className="ml-2 border border-myborder-600 rounded-sm w-200 p-1 outline-none" />
          </label>

          <label>
            Email
            <input type="email" placeholder="email@emai.com" className="ml-2 border border-myborder-600 rounded-sm w-200 p-1 outline-none m-3" />
          </label>

          <label>
            Senha
            <input type="password" className="ml-2 border border-myborder-600 rounded-sm w-50 p-1 outline-none m-3" />
          </label>

          <label>
            Confirar Senha
            <input type="password" className="ml-2 border border-myborder-600 rounded-sm w-50 p-1 outline-none m-3" />
          </label>


          <label>
            Cpf
            <input type="text" className="ml-2 border border-myborder-600 rounded-sm w-60 p-1 outline-none m-3" />
          </label>

          <label>
            Cnpj
            <input type="text" className="ml-2 border border-myborder-600 rounded-sm w-60 p-1 outline-none m-3" />
          </label>

          <div className="flex place-content-between">
            <button className="bg-mygreen-600 outline-none p-2 text-center font-mypoppins text-mywhite-500 rounded-sm cursor-pointer">Cadastrar</button>
            <div className="bg bg-red-600 p-2 text-center outline-none font-mypoppins rounded-sm text-mywhite-500 w-25 cursor-pointer">
              <Link to='login'>
                Cancelar
              </Link>
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}
