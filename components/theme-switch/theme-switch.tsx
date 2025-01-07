'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Switch } from '../ui/switch'

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme()

  const changeTheme =
    theme === 'light' ? () => setTheme('dark') : () => setTheme('light')

  return (
    <div className='flex items-center space-x-2'>
      <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 dark:-rotate-90 dark:scale-0' />
      <Switch
        id='theme-switch'
        checked={theme === 'dark'}
        onCheckedChange={changeTheme}
      />
      <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 dark:rotate-0 dark:scale-100' />
      <span className='sr-only'>Toggle theme</span>
    </div>
  )
}
