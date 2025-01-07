'use server'

import { z } from 'zod'
import { db } from '@/lib/db'
import { RegisterSchema } from '@/schemas'
import { getUserByEmail } from '@/lib/users'
import { signIn } from '@/auth'
import { saltAndHashPassword } from '@/features/hooks/saltAndHashPassword'
import { DEFAULT_REDIRECT } from '@/routes'

export async function register(data: z.infer<typeof RegisterSchema>) {
  const VALIDATION = RegisterSchema.safeParse(data)
  if (!VALIDATION.success) {
    return { status: 201, message: 'Campos invalidos!' }
  }

  const { email, username, fullName, password } = VALIDATION.data

  const EXISTING_USER = await getUserByEmail(email)

  if (EXISTING_USER) {
    return { status: 403, message: 'Este usario ya existe!' }
  }

  const HASHED_PASS = saltAndHashPassword(password)

  try {
    await db.user.create({
      data: {
        password: HASHED_PASS,
        username,
        fullName,
        email,
      },
    })

    return { status: 403, message: 'Session iniciada!' }
  } catch {
    return { status: 501, message: 'Ha ocurrido un error!' }
  } finally {
    await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirectTo: DEFAULT_REDIRECT,
    })
  }
}
