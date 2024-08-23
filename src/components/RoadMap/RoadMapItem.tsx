import React from 'react'

import icnDot from '@/public/icons/icn-dot.png'

import NextImage from '../NextImage'

interface RoadMapItemProps {
  text: string
}

const RoadMapItem: React.FC<RoadMapItemProps> = ({ text }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="size-6">
        <NextImage src={icnDot} width={24} height={24} alt="dechess-icn-dot" />
      </div>
      <p className="text-sm lg:text-normal">{text}</p>
    </div>
  )
}

export default RoadMapItem
