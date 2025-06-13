export const Input = () => {
  return (
    <>
      <label className="text-mygreen-600 font-semibold">
        Nome
        <input type="text"
          placeholder="nome" className="bg-mygreen-600 text-center p-2 text-mywhite-500 rounded-sm m-4"
        />
      </label>

      <label className="text-mygreen-600 font-semibold">
        Senha
        <input type="password" placeholder="*****" className="bg-mygreen-600 text-center p-2 text-mywhite-500 rounded-sm m-4" />
      </label>
      <button className="bg-mygreen-600 text-mywhite-500 p-2 rounded-[16px] cursor-pointer m-4 w-69 ml-16 font-semibold">Entrar</button>
      <div className="">
        <span className="m-4 text-mygreen-600 font-semibold cursor-pointer">Recuperar senha</span>
        <span className="text-mygreen-600 border-t-mywhite-500 font-semibold cursor-pointer">Criar Conta</span>
      </div>
    </>
  )
}
