import { Input } from "./Input"

export const FormsComponent = () => {
  return (
    <div className="text-center border border-black p-20 flex flex-col justify-center rounded-r-lg w-auto bg-tetest-400">
      <h3 className="font-mypoppins text-2xl text-mygreen-600 font-bold">Login</h3>
      <form className="flex flex-col">
        <Input />
      </form>
    </div>
  )
}
