import { Input } from "./Input"

export const FormsComponent = () => {
  return (
    <div className="text-center p-20 flex flex-col justify-center rounded-r-lg w-auto bg-myblue-600">
      <h3 className="font-mypoppins text-2xl text-mywhite-500 font-bold">Login</h3>
      <form className="flex flex-col">
        <Input />
      </form>
    </div>
  )
}
