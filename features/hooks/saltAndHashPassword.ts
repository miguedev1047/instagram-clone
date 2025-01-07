import bcrypt from 'bcrypt-edge'

export function saltAndHashPassword(password: string) {
  const saltRounds = 10
  const salt = bcrypt.genSaltSync(saltRounds) 
  const hash = bcrypt.hashSync(password, salt)
  return hash
}
