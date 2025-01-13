import { Link } from "react-router-dom"

export default function LoginViews() {
  return (
    <>
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-white font-bold text-4xl">Iniciar sesión</h1>

      <div className="mt-10">
        <p className="text-white font-bold">¿Aun no tienes cuenta?<Link to={"/auth/register"}>Registrate</Link></p>
      </div>
      </div>
    </>
  );
}
