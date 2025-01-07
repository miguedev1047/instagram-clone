import { db } from '@/lib/db'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { getUserById } from '@/lib/users'
import NextAuth from 'next-auth'
import authConfig from '@/auth.config'

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  callbacks: {
    session: async ({ session, token }) => {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }

      if (token.role && session.user) {
        session.user.username = token.username
        session.user.fullName = token.fullName
        session.user.role = token.role
        session.user.image = token.image
      }
      return session
    },
    jwt: async ({ token }) => {
      if (!token.sub) return token

      const USER = await getUserById(token.sub)
      if (!USER) return token

      token.username = USER.username
      token.image = USER.image
      token.fullName = USER.fullName
      token.role = USER.role

      return token
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  ...authConfig,
})
