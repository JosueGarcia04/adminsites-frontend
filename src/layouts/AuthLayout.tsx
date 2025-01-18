
import { Outlet } from "react-router-dom"


export default function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <header className="w-full p-4 min-h-screen">
        <h1 className="text-4xl font-bold">AdminSites</h1>
        <Outlet/>
      </header>
    </div>
  )
}
