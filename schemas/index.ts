import * as z from 'zod'

export const RegisterSchema = z.object({
  username: z.string().min(1, {
    message: 'Ingresa un nombre valido',
  }),
  fullName: z.string().min(1, {
    message: 'Ingresa tu nombre completo',
  }),
  email: z.string().email({
    message: 'El correo electrónico no es válido',
  }),
  password: z.string().min(6, {
    message: 'La contraseña debe tener al menos 6 caracteres',
  }),
})

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'El correo electrónico no es válido',
  }),
  password: z.string().min(6, {
    message: 'La contraseña debe tener al menos 6 caracteres',
  }),
})
