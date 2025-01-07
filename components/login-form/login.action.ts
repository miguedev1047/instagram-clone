'use server'

import { signIn } from '@/auth'
import { DEFAULT_REDIRECT } from '@/routes'
import { LoginSchema } from '@/schemas'
import { AuthError } from 'next-auth'
import { z } from 'zod'

export async function login(data: z.infer<typeof LoginSchema>) {
  const VALIDATION = LoginSchema.safeParse(data)
  if (!VALIDATION.success) return { status: 403, message: 'Campos invalidos!' }

  const { email, password } = VALIDATION.data

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_REDIRECT
    })

    return { status: 201, message: 'Session iniciada!' }
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { status: 403, message: 'Credenciales invalidas!' }
        default:
          return { status: 403, message: 'Ha ocurrido un error!' }
      }
    }

    throw error
  }
}
