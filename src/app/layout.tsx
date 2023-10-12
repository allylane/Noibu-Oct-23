import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - Noibu',
    default: 'Noibu - Optimize your online store with next-level performance monitoring.',
  },
  description:
    'Optimize your online store with next-level performance monitoring.',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased'
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
