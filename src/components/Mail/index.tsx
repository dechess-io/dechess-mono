'use client'

import React from 'react'

import bgInput from '@/public/images/bg-input.svg'

import Button from '../Button'
import NextImage from '../NextImage'

const Mail = () => {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
  }

  return (
    <section className="bg-image bg-mail">
      <div className="container min-h-[50vh] lg:min-h-screen">
        <div className="flex flex-col items-center">
          <div className="grid gap-6 justify-center">
            <h2
              id="dechess-contact"
              data-aos="fade-down"
              data-aos-anchor-placement="top-bottom"
              className="scroll-section font-planet text-2xl md:text-3xl md:leading-[4.625rem] text-center"
            >
              Newsletter
            </h2>
            <p
              data-aos="fade-down"
              data-aos-duration="1500"
              className="max-w-[537px] lg:text-normal font-light text-center"
            >
              STAY UP-TO-DATE TO LEARN MORE ABOUT OUR GAMES, UPDATES, AND MORE.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div
              data-aos="zoom-in"
              className="flex flex-col items-center justify-center mt-10 lg:mt-48"
            >
              <h3 className="text-normal font-planet text-center">Email</h3>
              <div className="relative">
                <NextImage
                  src={bgInput}
                  width={444}
                  height={82}
                  className="w-[300px] lg:w-auto"
                  alt="dechess-bg-mail-input"
                />

                <div className="absolute inset-0 flex justify-center items-center px-10">
                  <input
                    type="email"
                    className=" bg-transparent outline-none w-full pt-2 pb-4 placeholder:text-grey-61"
                    placeholder="Type your email"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <Button type="submit">Subcribe</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Mail
