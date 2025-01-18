import { Link } from "react-router-dom"
import {useForm} from "react-hook-form"
export default function RegisterView() {

  const {register, watch, formState:{errors}, handleSubmit } = useForm()
  return (
    <>
    <div className="flex flex-col items-center justify-center">
    <h1 className="font-bold text-4xl">Registro</h1>
    <form className="mt-8 w-full max-w-sm">
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-2">Nombre</label>
            <input
              id="name"
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu nombre"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">Correo electrónico</label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu correo"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="handle" className="block font-medium mb-2">Handle</label>
            <input
              id="handle"
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Haz tu nombre de usuario"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-2">Contraseña</label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Crea tu contraseña"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="repeatPassword" className="block  font-medium mb-2">Repetir contraseña</label>
            <input
              id="repeatPassword"
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Repite tu contraseña"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Crear cuenta
          </button>
        </form>
    <div className="mt-10">
      <p className="font-bold">¿Ya tienes cuenta?<Link to={"/auth/login"} className="text-blue-600 hover:underline"> Inicia sesión</Link></p>
    </div>
    </div>
    </>
  )
}
