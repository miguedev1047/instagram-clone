import { LoginCard } from '@/app/(home)/_components/login-card/login-card'
import { MobileMocks } from '@/app/(home)/_components/mobile-mocks'

export default function Home() {
  return (
    <main className='flex w-full h-screen justify-center items-center'>
      <section className='flex items-center'>
        <MobileMocks />
        <LoginCard />
      </section>
    </main>
  )
}
