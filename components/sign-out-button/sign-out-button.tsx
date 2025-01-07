import { signOut } from '@/auth'
import { Button } from '@/components/ui/button'
import { ROOT } from '@/routes'

export function SignOutButton() {
  const onSignOut = async () => {
    'use server'
    await signOut({ redirect: true, redirectTo: ROOT })
  }
  
  return (
    <form action={onSignOut}>
      <Button type='submit'>Sign out</Button>
    </form>
  )
}
