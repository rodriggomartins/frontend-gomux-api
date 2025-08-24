import { Link } from "react-router"

export const Header = () => {
  return(
    <header className="flex content-between items-center bg-orange-500 p-2 text-mywhite-500 font-bold cursor-pointer">
        <img src="../../../public/logoheader.png" alt="Logo da loja" className="h-20 w-20 rounded-sm"/>

      <nav className="ml-273">
        <ul>
          <li className="hover:border-b-2 border-mywhite-500">Home</li>
          <li className="hover:border-b-2 border-mywhite-500">Compras</li>
          <li className="hover:border-b-2 border-mywhite-500"><Link to="/carrinho">Carrinho</Link></li>
          <li className="hover:border-b-2 border-mywhite-500"><Link to="/login">Sair</Link></li>
        </ul>
      </nav>
    </header>
  )

}
