import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { DiscordLogin } from '@/components/discord-login'
import { Separator } from '@/components/ui/separator'
import { RegisterForm } from '@/app/(auth)/account/sign-up/_components/register-form'
import { DownloadButtons } from '@/components/download-buttons'
import { pacificoFont } from '@/app/fonts/_index'
import Link from 'next/link'

export function RegisterCard() {
  return (
    <div className='w-[350px] h-auto space-y-3'>
      <Card className='p-8 mt-4 space-y-5'>
        <CardHeader className='text-center space-y-8 p-0'>
          <CardTitle
            className={cn('text-5xl font-extrabold', pacificoFont.className)}
          >
            Mitasgram
          </CardTitle>
          <CardDescription className='text-lg'>
            Sign up to see photos and videos from your friends.
          </CardDescription>
        </CardHeader>

        <DiscordLogin>Log in with Discord</DiscordLogin>

        <div className='relative w-full'>
          <Separator />
          <p className='absolute top-0 translate-y-[-50%] left-[50%] translate-x-[-50%] px-5 py-2 bg-card mx-auto opacity-70 text-sm'>
            OR
          </p>
        </div>

        <CardContent className='p-0'>
          <RegisterForm />
        </CardContent>
      </Card>

      <Card className='px-8 py-6'>
        <p className='text-center text-sm'>
          Have an account?{' '}
          <Link
            className='text-primary'
            href='/account/sign-in'
          >
            Log in
          </Link>
        </p>
      </Card>

      <DownloadButtons />
    </div>
  )
}
