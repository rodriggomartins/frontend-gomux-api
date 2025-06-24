import { Input } from "./Input"

export const FormularioComponent = () => {
  return (
    <div className="bg-white-segund-600 w-auto h-auto">
      <div>
        <h3 className="bg-myblack-600 font-mypoppins text-mywhite-500 text-center p-5">Registar-se</h3>
      </div>
      <form className="mt-3 p-4">
        <Input />
      </form>
    </div>
  )
}
