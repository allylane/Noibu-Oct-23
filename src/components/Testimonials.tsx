import Image from 'next/image'
import Levis from '@/images/logos/Levis.svg'
import TomFord from '@/images/logos/TomFord.svg'
import Hanes from '@/images/logos/Hanes-logo.svg'
import Champion from '@/images/logos/Champion.svg'
import Guess from '@/images/logos/Guess.svg'
import Moschino from '@/images/logos/Moschino.svg'

export function Testimonials() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="font-display mx-auto text-center text-3xl font-medium text-white sm:text-4xl">
          Trusted by the world biggest online stores.
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
          <Image
            src={Levis.src}
            alt="Levis"
            layout="responsive"
            objectFit="contain"
            width={110}
            height={45}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />

          <Image
            src={TomFord.src}
            alt="TomFord"
            layout="responsive"
            objectFit="contain"
            width={216}
            height={32}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />

          <Image
            src={Hanes.src}
            alt="Hanes"
            layout="responsive"
            objectFit="contain"
            width={103}
            height={90}
            className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
          />

          <Image
            src={Champion.src}
            alt="Champion"
            layout="responsive"
            objectFit="contain"
            width={202}
            height={55}
            className="col-span-2 mt-4 lg:col-span-1" // Added mt-4 for margin-top
          />

          <Image
            src={Guess.src}
            alt="Guess"
            layout="responsive"
            objectFit="contain"
            width={203}
            height={36}
            className="col-span-2 mt-1 max-h-12 w-full object-contain lg:col-span-1"
          />

          <Image
            src={Moschino.src}
            alt="Moschino"
            layout="responsive"
            objectFit="contain"
            width={173}
            height={59}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
        </div>
      </div>
    </div>
  )
}
