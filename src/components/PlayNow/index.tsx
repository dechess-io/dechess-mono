import React from 'react'

import Link from 'next/link'

import Button from '@/components/Button'
import icnPlayer from '@/public/icons/icn-layer.svg'

import NextImage from '../NextImage'

const PlayNow = () => {
  return (
    <Link href={'https://t.me/dechess_bot'} target="_blank">
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
    </Link>
  )
}

export default PlayNow
