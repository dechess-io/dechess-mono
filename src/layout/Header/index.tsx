import React from 'react'

import Button from '@/components/Button'
import NextImage from '@/components/NextImage'
import Logo from '@/public/images/logo.svg'

const Header = () => {
  return (
    <div className="py-3 bg-black/20 backdrop-blur-lg">
      <div className="container flex items-center justify-between">
        <NextImage src={Logo} width={112} height={40} alt="dechess-logo" />
        <div className="">
          <Button>X</Button>
        </div>
      </div>
    </div>
  )
}

export default Header
