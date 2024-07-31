import React from "react"
import { DiscordAlt, Twitter } from "@styled-icons/boxicons-logos"

const Hero: React.FC = () => {
  return (
    <div className="hero flex flex-col justify-between h-full gap-[60px]">
      <div className="logo-container">
        {/* <a href="/">
          <img src="/images/Logo.svg" alt="logo" height={43} />
        </a> */}
      </div>
      <div className="flex flex-col gap-[32px]">
        <div className="text-[60px] font-[600] leading-[72px]">
          DeChess,
          <br />
          Where{" "}
          <span className="gradiant">
            Brilliant <br /> Moves
          </span>{" "}
          Begin
        </div>
        <div className="text-[23px] leading-[30.36px] opacity-60">
          Unleash your strategy, perfect your <br />
          play, and rise to chess mastery
        </div>
        <div className="flex gap-4">
          <a
            className="bg-[#B3FF77] px-[24px] py-[18px] rounded-[62px] text-black uppercase text-[18px] font-[700] tracking-widest inline-flex items-center justify-between gap-[10px]"
            href="https://discord.com/invite/NsjZBsSSEq"
            target="_blank"
          >
            <DiscordAlt size={26.4} /> Discord
          </a>
          <a
            className="bg-[#B3FF77] px-[24px] py-[18px] rounded-[62px] text-black uppercase text-[18px] font-[700] tracking-widest inline-flex items-center justify-between gap-[10px]"
            href="https://twitter.com/dechess_io"
            target="_blank"
          >
            <Twitter size={26.4} /> Twitter
          </a>
        </div>
      </div>
      <div className="footer flex gap-[36px]">
        <a target="_blank" href="https://docs.dechess.io/dechess-on-telegram">
          ChessPapers
        </a>
        <a target="_blank" href="https://docsend.com/view/dihcs6pi5yajm5s3">
          Pitch Deck
        </a>
      </div>
    </div>
  )
}

export default Hero
