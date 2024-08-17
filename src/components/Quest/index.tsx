import React from 'react'

import chessMap from '@/public/images/chess-map.png'

import Button from '../Button'
import Divider from '../Divider'
import NextImage from '../NextImage'

const Quest = () => {
  return (
    <div className="flex items-center flex-wrap justify-center gap-10">
      <div className="grid gap-6">
        <div className="grid gap-1">
          <h2
            data-aos="fade-right"
            className="scroll-section font-planet text-2xl md:text-3xl md:leading-[4.625rem]"
          >
            Treasure quest
          </h2>
          <Divider />
          <h3 className="text-2xl font-planet">The Chess of Eternity</h3>
        </div>
        <div data-aos="fade-in">
          <div className="lg:text-normal max-w-[600px] font-light">
            <p>
              Dare to explore the ancient corridors of the pyramid, where only
              the cleverest will uncover its hidden treasures.
            </p>
          </div>
        </div>
        <div className="grayscale pointer-events-none cursor-default mt-4">
          <Button>Coming soon</Button>
        </div>
      </div>
      <div className="hidden lg:block">
        <NextImage
          src={chessMap}
          width={490}
          height={636}
          alt="dechess-divider-image"
        />
      </div>
    </div>
  )
}

export default Quest
