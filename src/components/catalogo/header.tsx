import { Link } from "react-router"

export const Header = () => {
  return(
    <div className="bg-orange-500 text-mywhite-500 font-medium font-mypoppins text-sm p-3">
      <header className="p-3 flex place-content-between">
        <img src ="#" alt="logo" />
        <input type="text" placeholder="buscar produtos" className="outline-none p-1 border border-mywhite-500 rounded-sm text-center 
          font-medium" />
        <ul className="flex cursor-pointer space-x-4 ">
          <li>Home</li>
          <li>Carrinho</li>
          <li>Favoritos</li>
          <li><Link to="/perfil_users">Perfil</Link></li>
          <li><Link to='/login'>Sair</Link></li>
        </ul>
      </header>
    </div>
  )
}
