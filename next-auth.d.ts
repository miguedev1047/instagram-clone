import { DefaultSession, DefaultUser } from '@auth'

declare module 'next-auth' {
  interface User extends DefaultUser {
    role?: string
  }

  interface Session {
    user?: {
      id?: string
      role?: string
    } & DefaultSession['USER']
  }
}
