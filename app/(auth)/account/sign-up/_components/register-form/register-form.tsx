'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { useTransition } from 'react'
import { Form, FormField, FormItem } from '@/components/ui/form'
import { RegisterSchema } from '@/schemas'
import { Input } from '@/components/ui/input'
import { register } from '../../_services/register'
import { useRouter } from 'next/navigation'
import { useToast } from '@/features/hooks/use-toast'
import Link from 'next/link'

export function RegisterForm() {
  const { toast } = useToast()

  const [isPending, startTransition] = useTransition()
  const { refresh } = useRouter()

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = form.handleSubmit((values) => {
    startTransition(async () => {
      const { status, message } = await register(values)

      if (status === 201) {
        refresh()
        return
      }

      toast({
        variant: 'destructive',
        description: message,
      })
    })
  })

  return (
    <Form {...form}>
      <form
        id='sign-up-form'
        onSubmit={onSubmit}
        className='grid gap-1'
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <Input
                type='email'
                placeholder='Email'
                disabled={isPending}
                {...field}
              />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <Input
                type='password'
                placeholder='Password'
                disabled={isPending}
                {...field}
              />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='fullName'
          render={({ field }) => (
            <FormItem>
              <Input
                placeholder='Full name'
                disabled={isPending}
                {...field}
              />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <Input
                placeholder='Username'
                disabled={isPending}
                {...field}
              />
            </FormItem>
          )}
        />

        <article className='space-y-5 text-xs text-center my-2 opacity-70 px-2'>
          <p>
            People who use our service may have uploaded your contact
            information to Instagram.{' '}
            <Link
              href='/'
              className='text-sky-200'
            >
              Learn More
            </Link>
          </p>

          <p>
            By signing up, you agree to our{' '}
            <Link
              href='/'
              className='text-sky-200'
            >
              Terms
            </Link>
            ,{' '}
            <Link
              href='/'
              className='text-sky-200'
            >
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link
              href='/'
              className='text-sky-200'
            >
              Cookies Policy
            </Link>
            .
          </p>
        </article>

        <Button type='submit'>Sign Up</Button>
      </form>
    </Form>
  )
}
