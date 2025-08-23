
export const Header = () => {
  return(
    <header className="flex content-between bg-orange-500 p-2 text-mywhite-500 font-bold cursor-pointer">
        <img src="../../../public/logoheader.png" alt="Logo da loja" className="h-20 w-20 rounded-sm"/>
      <nav>
        <ul>
          <li>Home</li>
          <li>Compras</li>
          <li>Carrinho</li>
          <li>Sair</li>
        </ul>
      </nav>
    </header>
  )

}
