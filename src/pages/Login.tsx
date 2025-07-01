import { FormsComponent } from "../components/FormsComponent"

export const Login = () => {
  return (
        <div className="m-8 mt-16 flex justify-center">
          <div className="bg-blue-segund-400 w-[284px] h-[563px] flex items-center justify-center rounded-l-lg shadow-xl">
            <h1 className="font-black text-mywhite-500 text-2xl text-center">Bem Vindo</h1>
          </div>
          <div className="flex">
            <FormsComponent />
          </div>
        </div>
  )
}
