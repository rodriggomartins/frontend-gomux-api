import { FormsComponent } from "../components/FormsComponent"

export const Login = () => {
  return (
    <html>
      <body className="bg-mywhite-500">
        <div className="mt-[99px] w-[1440px] ml-20 flex t-[207px]">
          <div className="bg-mygreen-600 w-[284px] h-[563px] flex items-center justify-center rounded-l-lg">
            <h1 className="font-black text-mywhite-500 text-2xl text-center">Bem Vindo</h1>
          </div>
          <div className="flex">
            <FormsComponent />
          </div>
        </div>
      </body>
    </html>
  )
}
