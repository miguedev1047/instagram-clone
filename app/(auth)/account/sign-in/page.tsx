import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { DiscordLogin } from '@/components/discord-login'
import { pacificoFont } from '@/app/fonts/_index'
import { DownloadButtons } from '@/components/download-buttons'
import { LoginForm } from '@/components/login-form'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <section className='w-full min-h-screen flex items-start justify-center'>
      <div className='w-[350px] h-auto space-y-3'>
        <Card className='p-8 mt-4 space-y-5'>
          <CardHeader className='text-center space-y-8 p-0'>
            <CardTitle
              className={cn('text-5xl font-extrabold', pacificoFont.className)}
            >
              Mitasgram
            </CardTitle>
          </CardHeader>

          <CardContent className='p-0 !mt-8'>
            <LoginForm />
          </CardContent>

          <div className='relative w-full'>
            <Separator />
            <p className='absolute top-0 translate-y-[-50%] left-[50%] translate-x-[-50%] px-5 py-2 bg-card mx-auto opacity-70 text-sm'>
              OR
            </p>
          </div>
          <DiscordLogin isLink>Log in with Discord</DiscordLogin>
        </Card>

        <Card className='px-8 py-6'>
          <p className='text-center text-sm'>
            Don&apos;t have an account?{' '}
            <Link
              className='text-primary'
              href='/account/sign-up'
            >
              Sign up
            </Link>
          </p>
        </Card>

        <DownloadButtons />
      </div>
    </section>
  )
}
