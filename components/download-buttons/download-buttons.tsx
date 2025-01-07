import { MicrosoftBtn, PlayStoreBtn } from '@/assets/buttons/_index'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'

const PLAYSTORE_URL =
  'https://play.google.com/store/apps/details?id=com.instagram.android&pli=1'
const MICROSOFT_URL =
  'https://apps.microsoft.com/detail/9nblggh5l9xt?launch=true&mode=full&hl=es-es&gl=co&ocid=bingwebsearch'

export function DownloadButtons() {
  return (
    <div className='flex flex-col gap-4 !mt-4'>
      <p className='text-center'>Get the app.</p>

      <div className='mx-auto space-x-2'>
        <Button
          asChild
          className='bg-transparent p-0'
        >
          <Link
            href={PLAYSTORE_URL}
            target='_blank'
          >
            <Image
              src={PlayStoreBtn.src}
              width={128}
              height={128}
              className='w-[134px] h-auto'
              alt='Instagram Download Button'
            />
          </Link>
        </Button>

        <Button
          asChild
          className='bg-transparent p-0'
        >
          <Link
            href={MICROSOFT_URL}
            target='_blank'
          >
            <Image
              src={MicrosoftBtn.src}
              width={128}
              height={128}
              className='w-[110px] h-auto'
              alt='Instagram Download Button'
            />
          </Link>
        </Button>
      </div>
    </div>
  )
}
