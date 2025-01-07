import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { pacificoFont } from '@/app/fonts/_index'
import { DownloadButtons } from '@/components/download-buttons'
import { LoginForm } from '@/components/login-form'
import Link from 'next/link'

export function LoginCard() {
  return (
    <div className='w-[350px] space-y-4'>
      <Card className='p-6 w-full h-[340px] flex flex-col justify-between'>
        <div>
          <CardHeader>
            <CardTitle
              className={cn(
                'text-center text-5xl font-extrabold',
                pacificoFont.className
              )}
            >
              Mitasgram
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-center'>
              Share what you&apos;re into with the people who get you.
            </p>
          </CardContent>
        </div>
        <CardFooter>
          <LoginForm />
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
