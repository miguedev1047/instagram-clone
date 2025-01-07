import { SignOutButton } from '@/components/sign-out-button'
import { getCurrentSession } from '@/lib/session'

export default async function FeedPage() {
  const session = await getCurrentSession()

  return (
    <div className='space-y-5'>
      <div className='w-full flex items-center justify-between px-8 py-4'>
        <h2>Feed</h2>
        <SignOutButton />
      </div>

      <div>
        <p>{session.username}</p>
        <p>{session.fullName}</p>
        <p>{session.email}</p>
      </div>
    </div>
  )
}
