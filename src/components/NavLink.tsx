import Link from 'next/link'

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;  // Optional className prop
}

export function NavLink({ href, children, className = "" }: NavLinkProps) {
  const combinedClass = `inline-block rounded-lg px-2 py-1 text-base text-slate-900 hover:bg-slate-100 hover:text-slate-900 ${className}`;

  return (
    <Link href={href}>
      <span className={combinedClass}>
        {children}
      </span>
    </Link>
  )
}
