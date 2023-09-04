"use client"

import Link, { LinkProps } from "next/link"
import { usePathname } from "next/navigation"

type MenuButtonProps = {
  children: React.ReactNode
} & LinkProps

export default function MenuButton({
  href,
  children,
  ...rest
}: MenuButtonProps) {
  const pathname = usePathname()
  const isActive =
    pathname === href ||
    pathname === rest.as ||
    pathname?.startsWith(String(rest.as))

  return (
    <Link
      {...rest}
      href={href}
      className={`
				${
          isActive
            ? "text-primary-light dark:text-primary-dark"
            : "text-secondary-dark dark:text-neutral-light"
        }
				hover:text-neutral-light hover:bg-primary-light dark:hover:bg-primary-dark dark:hover:text-neutral-light
				transition duration-300 select-none px-3 py-2 rounded-md
			`}
    >
      {children}
    </Link>
  )
}
