import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios, {isAxiosError} from "axios";
import {toast} from 'sonner'
import type {CredentialsRegister}from "../types/index"
import ErrorMessages from "../components/ErrorMessages";

export default function RegisterView() {
  interface RegisterData {
    name: string;
    email: string;
    handle: string;
    password: string;
    repeatPassword: string;
  }
  const initialValues : CredentialsRegister= {
    name: '',
    email: '',
    handle: '',
    password: '',
    repeatPassword: '',
  };

  const {register,watch,reset,formState: { errors },handleSubmit,} = useForm<RegisterData>({
    defaultValues: initialValues,
  });

  const password = watch('password')

  const handleRegister = async(data: RegisterData) => {
    try{
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/register`, data)
      toast     
      reset()
    }catch(error){
      if(isAxiosError(error)&&error.response){
        console.log(error.response.data.error)
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-4xl">Registro</h1>
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="mt-8 w-full max-w-sm"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-2">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register('name', {
              required: "Nombre obligatorio",
            })}
          />
          {errors.name && <ErrorMessages>{errors.name.message}</ErrorMessages>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-2">
            Correo electrónico
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register('email', {
              required: "Correo obligatorio",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "E-mail no válido",
            },
            })}
          />
          {errors.email && <ErrorMessages>{errors.email.message}</ErrorMessages>}
        </div>

        <div className="mb-4">
          <label htmlFor="handle" className="block font-medium mb-2">
            Handle
          </label>
          <input
            id="handle"
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register('handle', {
              required: "Handle obligatorio",
            })}
          />
          {errors.handle && <ErrorMessages>{errors.handle.message}</ErrorMessages>}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block font-medium mb-2">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register('password', {
              required: "Contraseña obligatoria",
              minLength:{
                value: 8,
                message: "Mínimo 8 caracteres"
              }
            })}
          />
          {errors.password && <ErrorMessages>{errors.password.message}</ErrorMessages>}
        </div>

        <div className="mb-6">
          <label htmlFor="repeatPassword" className="block font-medium mb-2">
            Repetir contraseña
          </label>
          <input
            id="repeatPassword"
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register('repeatPassword', {
              required: "Repetir contraseña es obligatorio",
              validate: (value) =>
                value === password || "Las contraseñas no coinciden",
            })}
          />
          {errors.repeatPassword && (
            <ErrorMessages>{errors.repeatPassword.message}</ErrorMessages>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Crear cuenta
        </button>
      </form>

      <div className="mt-10">
        <p className="font-bold">
          ¿Ya tienes cuenta?
          <Link to={"/auth/login"} className="text-blue-600 hover:underline">
            {" "}
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
