import React from 'react'

import Button from '../Button'

const Academy = () => {
  return (
    <section id="dechess-academy" className="bg-image bg-academy">
      <div className="container min-h-screen flex justify-end items-center">
        <div className="grid gap-10 justify-items-end">
          <div className="grid gap-6 justify-items-end">
            <h2
              data-aos="fade-left"
              data-aos-anchor-placement="top-bottom"
              id="dechess-area"
              className="scroll-section font-planet text-2xl md:text-3xl md:leading-[4.625rem] text-center"
            >
              DeChess Academy
            </h2>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="max-w-[537px] lg:text-normal text-right"
            >
              We strive to inspire a love of chess, develop critical thinking
              skills, and create a supportive community of chess enthusiasts.
            </p>
          </div>
          <div className="grayscale pointer-events-none cursor-default">
            <Button>Coming soon</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Academy
