import React from 'react'

import dividerImage from '@/public/images/divider.svg'

import NextImage from '../NextImage'

const Divider = () => {
  return (
    <NextImage
      src={dividerImage}
      width={365}
      height={25}
      alt="dechess-divider-image"
    />
  )
}

export default Divider
