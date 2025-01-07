import { signIn } from '@/auth'
import { Button } from '@/components/ui/button'
import { DiscordLoginProps } from './discord-login.props'

export function DiscordLogin(props: DiscordLoginProps) {
  const { children, isLink } = props

  return (
    <form
      className='w-full'
      action={async () => {
        'use server'
        await signIn('discord')
      }}
    >
      <Button
        variant={!isLink ? 'default' : 'link'}
        className='w-full'
        type='submit'
      >
        {children}
      </Button>
    </form>
  )
}
