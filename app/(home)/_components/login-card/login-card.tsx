import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { pacificoFont } from '@/app/fonts/_index'
import { DownloadButtons } from '@/components/download-buttons'
import { LoginForm } from '@/components/login-form'
import { DiscordLogin } from '@/components/discord-login'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export function LoginCard() {
  return (
    <div className='w-[350px] space-y-4'>
      <Card className='p-8 w-full min-h-[340px] flex flex-col justify-between space-y-5'>
        <CardHeader className='p-0 text-center space-y-8'>
          <CardTitle
            className={cn('text-5xl font-extrabold', pacificoFont.className)}
          >
            Mitasgram
          </CardTitle>
          <CardDescription className='text-lg'>
            Share what you&apos;re into with the people who get you.
          </CardDescription>
        </CardHeader>
        <CardFooter className='p-0 flex flex-col gap-8'>
          <LoginForm />

          <div className='relative w-full'>
            <Separator />
            <p className='absolute top-0 translate-y-[-50%] left-[50%] translate-x-[-50%] px-5 py-2 bg-card mx-auto  text-sm'>
              <span className='opacity-70'>OR</span>
            </p>
          </div>

          <DiscordLogin>Log in with Discord</DiscordLogin>
        </CardFooter>
      </Card>
      <Card className='p-6'>
        <p className='text-center text-sm'>
          Don&apos;t have an account?{' '}
          <Link
            href='/account/sign-up'
            className='text-primary'
          >
            Sign up
          </Link>
        </p>
      </Card>

      <DownloadButtons />
    </div>
  )
}
