import React from 'react'

import Button from '../Button'
import Divider from '../Divider'

const Academy = () => {
  return (
    <section className="bg-image bg-academy">
      <div className="container min-h-screen lg:min-h-[150vh] flex justify-end items-center">
        <div className="grid gap-6">
          <div className="grid gap-1">
            <h2
              id="dechess-academy"
              data-aos="fade-right"
              className="scroll-section font-planet text-2xl md:text-3xl md:leading-[4.625rem] text-right"
            >
              DeChess Academy
            </h2>
            <div className="flex justify-end">
              <Divider />
            </div>
            <h3 className="text-2xl font-planet text-right">
              The Hierophant's Wisdom
            </h3>
          </div>
          <div data-aos="fade-in">
            <div className="lg:text-normal max-w-[600px] font-light text-right">
              <p>
                Under the guidance of the hierophant, ascend from a novice to a
                master, mastering the ancient game that shaped empires.
              </p>
            </div>
          </div>
          <div className="grayscale pointer-events-none cursor-default mt-4 flex justify-end">
            <Button>Coming soon</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Academy
