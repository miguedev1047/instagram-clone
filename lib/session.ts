import { auth } from '@/auth'

export async function getCurrentSession() {
  const session = await auth()
  return session?.user
}

export async function getCurrentRole() {
  const session = await auth()
  return session?.user.role
}
