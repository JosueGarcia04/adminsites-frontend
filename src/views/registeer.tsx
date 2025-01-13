import { Link } from "react-router-dom"
export default function RegisterView() {
  return (
    <>
    <div className="flex flex-col items-center justify-center">
    <h1 className="text-white font-bold text-4xl">Crear cuenta</h1>

    <div className="mt-10">
      <p className="text-white font-bold">¿Ya tienes cuenta?<Link to={"/auth/login"}>Inicia sesión</Link></p>
    </div>
    </div>
    </>
  )
}
