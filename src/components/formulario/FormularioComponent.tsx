import { Link } from "react-router"

export const FormularioComponent = () => {
  return (
    <div className="p-5 font-mypoppins w-auto h-auto">
      <h3 className="text-center bg-myblack-600 text-newwhite-600 rounded-sm p-5">Cadastro Clientes</h3>

      <div className="bg-newwhite-600 p-6 flex imtes-center  justify-center w-auto h-auto">
        <form className="flex flex-col  items-center  rounded-xl p-7">
          <label>
            Nome
            <input type="tex" placeholder="Digite seu nome" className="border border-myborder-600  m-2 rounded-sm outline-none" />
          </label>
          <label>
            Sobrenome
            <input type="tex" placeholder="Sobrenome" className="m-2 outline-none border border-myborder-600 rounded-sm" />
          </label>
          <label>
            Cpf
            <input type="text" placeholder="cpf" className="m-2 outline-none border border-myboder-600 rounded-sm" />
          </label>
          <label>
            Cnpj
            <input type="text" placeholder="cnpj" className="m-2 outline-none border border-myborder-600 rounded-sm" />
          </label>


          <label>Sexo</label>
          <select className="w-30 outline-none">
            <option selected>Masculino</option>
            <option>Femenino</option>
            <option>Outros</option>
          </select>

          <div className="boder boder-red-400 bg-mygreen-600 mr-100 rounded-sm">
            <button className="p-2 text-mywhite-500 cursor-pointer">Cadastrar</button>
          </div>

        </form>
      </div>
      <div className="bg-red-600 w-30 mt-3 p-2 text-center text-mywhite-500 rounded-sm">
        <Link to='login' >
          Cancelar
        </Link>
      </div>
    </div>
  )
}
