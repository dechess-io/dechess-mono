import React from 'react'

import Link from 'next/link'

import NextImage from '@/components/NextImage'
import icnDiscord from '@/public/icons/icn-discord.svg'
import icnTelegram from '@/public/icons/icn-telegram.svg'
import icnTwitter from '@/public/icons/icn-twitter.svg'
import footerLogo from '@/public/images/footer-logo.svg'

const Footer = () => {
  return (
    <footer className="min-h-[516px] bg-image bg-footer mt-40  flex justify-center items-center">
      <div
        data-aos="zoom-out-up"
        className="container flex flex-col items-center justify-center gap-10"
      >
        <div className="flex flex-col gap-10">
          <NextImage
            src={footerLogo}
            width={147}
            height={175}
            alt="dechess-logo"
          />
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={'https://x.com/dechess_io'}
            target="_blank"
            className="p-[10px] rounded-full bg-white-fe block"
            style={{ boxShadow: 'inset 0px -3px 0px rgba(0, 0, 0, 0.20)' }}
          >
            <NextImage
              src={icnTwitter}
              width={24}
              height={24}
              alt="dechess-icn-twitter"
            />
          </Link>
          <Link
            href={'https://t.me/dechess_io'}
            target="_blank"
            className="p-[10px] rounded-full bg-white-fe block"
            style={{ boxShadow: 'inset 0px -3px 0px rgba(0, 0, 0, 0.20)' }}
          >
            <NextImage
              src={icnTelegram}
              width={24}
              height={24}
              alt="dechess-icn-telegram"
            />
          </Link>
          <Link
            href={'https://discord.com/invite/NsjZBsSSEq'}
            target="_blank"
            className="p-[10px] rounded-full bg-white-fe block"
            style={{ boxShadow: 'inset 0px -3px 0px rgba(0, 0, 0, 0.20)' }}
          >
            <NextImage
              src={icnDiscord}
              width={24}
              height={24}
              alt="dechess-icn-discord"
            />
          </Link>
        </div>
        <div className="flex items-center gap-10 mt-10">
          <Link
            href={
              'https://docs.dechess.io/dechess-on-telegram/responsibility/terms-of-service'
            }
            target="_blank"
          >
            Terms of Service
          </Link>
          <Link
            href={
              'https://docs.dechess.io/dechess-on-telegram/responsibility/dechess-policy'
            }
            target="_blank"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
