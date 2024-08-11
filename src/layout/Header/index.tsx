'use client'

import React, { useState } from 'react'

import Link from 'next/link'

import Button from '@/components/Button'
import Navbar from '@/components/Navbar'
import NextImage from '@/components/NextImage'
import { cn } from '@/lib/utils'
import icnCalendar from '@/public/icons/icn-calendar.svg'
import icnPlayer from '@/public/icons/icn-layer.svg'
import Logo from '@/public/images/logo.svg'

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const onToggleMenu = () => setOpenMenu(!openMenu)

  return (
    <header className="py-3 bg-black/20 backdrop-blur-lg">
      <div className="container flex items-center justify-between">
        <Link href="#">
          <NextImage src={Logo} width={112} height={40} alt="dechess-logo" />
        </Link>
        <div
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
          <Button className="group overflow-hidden" size="medium">
            <span className="absolute group-hover:top-[120%] top-1/2 -translate-y-1/2 transition-all duration-200">
              Play now
            </span>
            <span className="absolute group-hover:top-[90%] group-hover:lg:top-[80%] -top-1/2 translate-x-1/3 -translate-y-full transition-all duration-200">
              <NextImage
                src={icnPlayer}
                width={10}
                height={14}
                className="w-full h-full"
                alt="dechess-icn-player"
              />
            </span>
          </Button>
          <div onClick={onToggleMenu} className="block lg:hidden cursor-pointer">
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
