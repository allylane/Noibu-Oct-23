import Link from 'next/link'

import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sales',
}

export default function Register() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-8 w-auto" />
        </Link>
      </div>
      <h2 className="mt-20 text-4xl text-gray-900">
       Sales page
      </h2>
      <p className="mt-2 text-base text-gray-700">
        We haven't built this page yet.
        You can visit the <Link className='textlink' href="/">home page</Link>,  <Link className='textlink' href="/login">sign in</Link>, or <Link className='textlink' href="/register">sign up</Link> for a demo.
      </p>
    </SlimLayout>
  )
}
