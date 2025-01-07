import type { Metadata } from 'next'
import { RootProvider } from '@/providers/root-provider'
import { onestFont } from './fonts/_index'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: 'Mitasgram - Clone',
  description:
    'Create an account or log in to Instagram. Share what you like with people who understand you.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${onestFont.className} antialiased`}>
        <RootProvider>
          <Toaster />
          {children}
        </RootProvider>
      </body>
    </html>
  )
}
