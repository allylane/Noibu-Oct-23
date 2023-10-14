import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'
import issuesScreenshot from '@/images/screenshots/issues.jpg'

export function Hero() {
  return (
    <Container className="pb-16 text-center">
<div className="relative isolate pt-4 lg:pt-16">
        <div className="pb-20">



        <div className="hidden sm:mb-8 sm:flex sm:justify-center pt-20">
            <div className="relative rounded-full px-3 py-1 text-base text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
             Events log, now available to all customers{' '}
              <a href="https://help.noibu.com/hc/en-us/categories/7427166781581-New-Releases" className="text-blue-800">
                <span className="absolute inset-0" aria-hidden="true" />
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto text-center">
            <h1 className="mx-auto font-display text-5xl font-medium text-slate-900 sm:text-8xl text-balance">
      Optimize your online store with <span className="editorial-italic text-blue-800">next-level</span> performance monitoring.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-2xl text-slate-900 text-balance">
      Proactively look after your e-commerce website. Identify issues, improve performance and retain revenue.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button className='text-xl px-6 py-3' href="/register">Get a demo</Button>
      </div>
            </div>
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  src={issuesScreenshot.src}
                  alt="App screenshot"
                  width={2432}
                  height={1423}
                  className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>






      <div>
        <p className="font-display text-2xl text-slate-900">
          Trusted by eCommerce teams of all sizes
        </p>
        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              { name: 'Transistor', logo: logoTransistor },
              { name: 'Tuple', logo: logoTuple },
              { name: 'StaticKit', logo: logoStaticKit },
            ],
            [
              { name: 'Mirage', logo: logoMirage },
              { name: 'Laravel', logo: logoLaravel },
              { name: 'Statamic', logo: logoStatamic },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="flex">
                    <Image src={company.logo} alt={company.name} unoptimized />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        
      </div>
      

      
    </Container>
  )
}


