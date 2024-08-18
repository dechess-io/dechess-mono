'use client'

import React, { forwardRef } from 'react'

import Link from 'next/link'

import { cn } from '@/lib/utils'

interface NavItemProps {
  hash: string
  currentHash: string
  setHash: (hash: string) => void
  label: string
}

const NavItem = forwardRef<HTMLLIElement, NavItemProps>(
  ({ hash, currentHash, setHash, label }, ref) => {
    return (
      <li ref={ref} onClick={() => setHash(hash)}>
        <Link
          className={cn({
            'text-primary-4ff': currentHash === hash
          })}
          href={`#${hash}`}
        >
          {label}
        </Link>
      </li>
    )
  }
)

NavItem.displayName = 'NavItem'

export default NavItem
