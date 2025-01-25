import { Link } from "react-router-dom"

export default function LoginViews() {
  return (
    <>
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-4xl">Iniciar sesión</h1>
        <form className="mt-8 w-full max-w-sm">
        <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">Correo electrónico</label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-2">Contraseña</label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Iniciar sesion
          </button>
        </form>
      <div className="mt-10">
        <p className="font-bold">¿Aun no tienes cuenta?<Link to={"/auth/register"}  className="text-blue-600 hover:underline">  Registrate</Link></p>
      </div>
      </div>
    </> 
  );
}
