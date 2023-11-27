import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { Button } from '@/components/Button'

export function Footer() {
  return (
    <footer>
      <Container>
        <div className="relative isolate overflow-hidden">
          <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-3xl text-white sm:text-4xl">
                Increase successful checkouts for your customers start fixing
                errors today.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-xl leading-8 text-white">
                Start your free trial today. No up front payment required.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button
                  className="montrealsemibold px-6 py-3 text-xl"
                  href="/register"
                >
                  Start free trial
                </Button>
              </div>
            </div>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
              fillOpacity="0.5"
            />
            <defs>
              <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
                <stop stopColor="#2600FF" />
                <stop offset={1} stopColor="#2600FF" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </Container>
    </footer>
  )
}
