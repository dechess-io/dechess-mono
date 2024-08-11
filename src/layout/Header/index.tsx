'use client'

import React, { useEffect, useRef, useState } from 'react'

import Link from 'next/link'

import Navbar from '@/components/Navbar'
import NextImage from '@/components/NextImage'
import PlayNow from '@/components/PlayNow'
import { cn } from '@/lib/utils'
import icnCalendar from '@/public/icons/icn-calendar.svg'
import Logo from '@/public/images/logo.svg'

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const onToggleMenu = () => setOpenMenu(!openMenu)

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setOpenMenu(false)
    }
  }

  const handleScroll = () => {
    setOpenMenu(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      data-aos="zoom-in-down"
      className="fixed top-0 left-0 z-50 right-0 py-3 bg-black backdrop-blur-lg"
    >
      <div className="container flex items-center justify-between">
        <Link href="#dechess-about">
          <NextImage src={Logo} width={112} height={40} alt="dechess-logo" />
        </Link>
        <div
          ref={menuRef}
          className={cn(
            'fixed top-[72px] left-0 right-0 lg:relative lg:top-0',
            {
              'hidden lg:block ': !openMenu
            }
          )}
        >
          <Navbar />
        </div>
        <div className="flex items-center gap-4">
          <PlayNow />
          <div
            onClick={onToggleMenu}
            className="block lg:hidden cursor-pointer"
          >
            <NextImage
              src={icnCalendar}
              width={30}
              height={30}
              alt="dechess-icn-calendar"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
