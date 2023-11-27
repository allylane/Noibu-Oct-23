import Image from 'next/image'

import { EffectComposer } from 'postprocessing'
import { RenderPass } from 'postprocessing'
import { BokehPass } from 'postprocessing'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'
import issuesScreenshot from '@/images/screenshots/issues.png'
import Background from '@/images/bg.png'

export function Hero() {
  return (
    <Container className="text-center">
      <div className="relative isolate pt-20">
        <div className="mx-auto px-6 lg:px-8">
          <div className="mx-auto text-center">
            <h1 className="font-display text-balance gradient-text mx-auto text-5xl font-medium text-slate-900 sm:text-6xl sm:leading-tight">
              Upgrade your Magento store for BFCM with{' '}
              <span className="editorial-italic text-blue-800">next-level</span>{' '}
              performance monitoring.
            </h1>
            <p className="text-balance mx-auto mt-6 max-w-2xl text-2xl text-gray-300">
              Enhance your Magento website's performance. Reduce downtime,
              identify issues, and retain more revenue.
            </p>
            <div className="montrealsemibold mt-10 flex justify-center gap-x-6">
              <Button className="px-6 py-3 text-xl" href="/register">
                Start free trial
              </Button>
            </div>
            <p className="text-balance mx-auto mt-6 text-base text-gray-500">
              Start your Noibu journey at no cost! Get a full-access, two-week
              trial and begin tackling website errors right away.
            </p>
          </div>
          <div className="position relative mt-16 sm:mt-24">
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#2600FF] to-[#F7567C] opacity-30 sm:left-[calc(50%-0rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>

            <Image
              src={issuesScreenshot.src}
              alt="App screenshot"
              width={2534}
              height={1284}
              style={{ zIndex: 1 }}
            />
          </div>
        </div>
      </div>
    </Container>
  )
}
