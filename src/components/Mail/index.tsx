'use client'

import React, { useState } from 'react'

import { toast } from 'react-toastify'

import bgInput from '@/public/images/bg-input.svg'
import { apiUrl } from '@/utils/const'

import Button from '../Button'
import NextImage from '../NextImage'

const Mail = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email) {
      toast.error('Email is required!')
      return
    }

    if (!emailRegex.test(email)) {
      toast.error('Email is not valid!')
      return
    }

    try {
      const response = await fetch(`${apiUrl}/landing-page/email-support`, {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await response.json()

      if (response.ok) {
        toast.success(data.message || 'Subscribed successfully!')
        setEmail('')
      } else {
        toast.error(data.message || 'Subscription failed!')
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.')
    }
  }

  return (
    <section>
      <div className="container py-10 lg:py-0">
        <div className="flex flex-col items-center">
          <form
            className="bg-image bg-mail w-full min-h-[400px] lg:min-h-[800px] flex flex-col items-center justify-center"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-1 lg:gap-6 justify-center -mt-16 lg:-mt-28">
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
                STAY UP-TO-DATE TO LEARN MORE ABOUT OUR GAMES, UPDATES, AND
                MORE.
              </p>
            </div>
            <div
              data-aos="zoom-in"
              className="flex flex-col items-center justify-center mt-10 lg:mt-36"
            >
              <h3 className="text-normal font-planet text-center">Email</h3>
              <div className="relative">
                <NextImage
                  src={bgInput}
                  width={444}
                  height={82}
                  className="w-[200px] lg:w-auto"
                  alt="dechess-bg-mail-input"
                />

                <div className="absolute inset-0 flex justify-center items-center px-4 lg:px-10">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    spellCheck="false"
                    type="email"
                    className=" bg-transparent outline-none w-full pt-3 pb-4 placeholder:text-grey-61 text-xs lg:text-base"
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
