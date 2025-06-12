

export const Input = () => {
  return (
    <>
      <label className="text-mygreen-600">
        Nome
        <input type="text"
          placeholder="nome" className="bg-mygreen-600 text-center p-2 text-mywhite-500 rounded-sm m-4"
        />
      </label>

      <label className="text-mygreen-600">
        Senha
        <input type="password" placeholder="*****" className="bg-mygreen-600 text-center p-2 text-mywhite-500 rounded-sm m-4" />
      </label>
      <button className="bg-mygreen-600 text-mywhite-500 p-2 rounded-sm cursor-pointer m-4">Entrar</button>
    </>
  )
}
