import { Link } from "react-router"

export const Header = () => {
  return(
    <div className="bg-myblue-600 text-mywhite-500 font-light font-mypoppins text-sm p-3">
      <header className="p-3 flex place-content-between">
        <img src ="#" alt="logo" />
        <input type="text" placeholder="buscar produtos" className="outline-none p-1 border border-myborder-600 rounded-sm text-center 
          font-medium" />
        <ul className="flex cursor-pointer space-x-4 ">
          <li>Home</li>
          <li>Carrinho</li>
          <li>Favoritos</li>
          <li>Perfil</li>
          <li><Link to='/login'>Sair</Link></li>
        </ul>
      </header>
    </div>
  )
}
