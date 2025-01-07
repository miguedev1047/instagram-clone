import { NextAuthConfig } from 'next-auth'
import { LoginSchema } from '@/schemas'
import { getUserByEmail } from '@/lib/users'
import Credentials from 'next-auth/providers/credentials'
import Discord from 'next-auth/providers/discord'
import bcrypt from 'bcrypt-edge'

export default {
  providers: [
    Discord({
      clientId: process.env.AUTH_DISCORD_ID,
      clientSecret: process.env.AUTH_DISCORD_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    Credentials({
      credentials: {
        email: {
          type: 'email',
          label: 'Email',
          placeholder: 'Email',
        },
        password: {
          type: 'password',
          label: 'Enter your password',
        },
      },
      authorize: async (credentials) => {
        const VALIDATION = LoginSchema.safeParse(credentials)

        if (VALIDATION.success) {
          const { email, password } = VALIDATION.data

          const USER = await getUserByEmail(email)
          if (!USER || !USER.password) return null

          const MATCH_PASS = bcrypt.compareSync(password, USER.password)
          if (MATCH_PASS) return USER
        }

        return null
      },
    }),
  ],
} satisfies NextAuthConfig
