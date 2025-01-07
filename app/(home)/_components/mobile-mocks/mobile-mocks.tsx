import { Asset1, Asset2 } from '@/assets/mocks/_index'
import Iphone15Pro from '@/components/ui/iphone-15-pro'

export function MobileMocks() {
  return (
    <div className='w-[350px] h-[580px] relative'>
      <Iphone15Pro
        className='size-full absolute z-20'
        src={Asset2.src}
      />
      <Iphone15Pro
        className='size-full absolute -left-24 -top-2 z-0'
        src={Asset1.src}
      />
    </div>
  )
}
