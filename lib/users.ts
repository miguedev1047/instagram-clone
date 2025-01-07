import { db } from './db'

export async function getUserByEmail(email: string) {
  try {
    const USER = await db.user.findUnique({
      where: { email },
    })

    return USER
  } catch {
    return null
  }
}

export async function getUserById(id: string) {
  try {
    const USER = await db.user.findUnique({
      where: { id },
    })

    return USER
  } catch {
    return null
  }
}
