'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { useTransition } from 'react'
import { Form, FormField, FormItem } from '@/components/ui/form'
import { LoginSchema } from '@/schemas'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { useToast } from '@/features/hooks/use-toast'
import { login } from './login.action'

export function LoginForm() {
  const { toast } = useToast()

  const [isPending, startTransition] = useTransition()
  const { refresh } = useRouter()

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = form.handleSubmit((values) => {
    startTransition(async () => {
      const { status, message } = await login(values)

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
        className='grid gap-1 w-full'
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <Input
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

        <Button type='submit'>Log in</Button>
      </form>
    </Form>
  )
}
