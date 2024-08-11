import React from 'react'

import Link from 'next/link'

import icnArrowDown from '@/public/icons/icn-arrow-down.svg'

import NextImage from '../NextImage'

const Navbar = () => {
  return (
    <nav>
      <ul className="flex lg:items-center rounded flex-col lg:flex-row gap-4 lg:gap-8 text-sm bg-black-1a lg:bg-transparent p-4 lg:py-0">
        <li className='text-primary-4ff'>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">Area</Link>
        </li>
        <li>
          <Link href="#">Academy</Link>
        </li>
        <li>
          <Link href="#">Roadmap</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
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
