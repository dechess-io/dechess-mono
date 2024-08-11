'use client'

import React, { useEffect, useRef, useState } from 'react'

import Link from 'next/link'

import Aos from 'aos'

import icnArrowDown from '@/public/icons/icn-arrow-down.svg'

import NextImage from '../NextImage'
import NavItem from './NavItem'

const Navbar = () => {
  const [hash, setHash] = useState('')
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({})

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true
    })
  }, [])

  useEffect(() => {
    const currentHash = window.location.hash.substring(1)
    setHash(currentHash)
  }, [])

  return (
    <nav>
      <ul className="flex lg:items-center rounded flex-col lg:flex-row gap-4 lg:gap-8 text-sm bg-black-1a lg:bg-transparent p-4 lg:py-0">
        <NavItem
          hash="dechess-about"
          currentHash={hash}
          setHash={setHash}
          label="About"
          ref={(el) => {
            sectionsRef.current['dechess-about'] = el
          }}
        />
        <NavItem
          hash="dechess-area"
          currentHash={hash}
          setHash={setHash}
          label="Area"
          ref={(el) => {
            sectionsRef.current['dechess-area'] = el
          }}
        />
        <NavItem
          hash="dechess-academy"
          currentHash={hash}
          setHash={setHash}
          label="Academy"
          ref={(el) => {
            sectionsRef.current['dechess-academy'] = el
          }}
        />
        <NavItem
          hash="dechess-roadmap"
          currentHash={hash}
          setHash={setHash}
          label="Roadmap"
          ref={(el) => {
            sectionsRef.current['dechess-roadmap'] = el
          }}
        />
        <NavItem
          hash="dechess-contact"
          currentHash={hash}
          setHash={setHash}
          label="Contact"
          ref={(el) => {
            sectionsRef.current['dechess-roadmap'] = el
          }}
        />
        <li className="group relative">
          <div className="flex items-center gap-2 cursor-default">
            <span>Documents</span>
            <NextImage
              src={icnArrowDown}
              width={20}
              height={20}
              alt="dechess-icn-arrow-down"
            />
          </div>
          <ul className="group-hover:opacity-100 group-hover:visible transition-all duration-100 lg:opacity-0 lg:invisible lg:absolute z-10 top-[130%] left-0 space-y-2 bg-grey-61/10 rounded py-2 px-4 min-w-[180px] shadow-black-1a shadow">
            <li className="hover:indent-2 transition-all duration-100">
              <Link href="#">Pith deck</Link>
            </li>
            <li className="hover:indent-2 transition-all duration-100">
              <Link href="#">Whitepaper</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
