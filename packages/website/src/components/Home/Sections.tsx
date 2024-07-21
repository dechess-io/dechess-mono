import React, { PropsWithChildren } from "react"
import gsap from "gsap"
import { Observer } from "gsap/Observer"
import { useEffectOnce } from "usehooks-ts"
import { DiscordAlt, Twitter } from "@styled-icons/boxicons-logos"
gsap.registerPlugin(Observer)

let current = 0
let isAnimating = false

const Section: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className="block home-section w-[592px] animate__animated max-w-[80%] lg:max-w-[100%]">
      <div className="h-[calc(100vh-(79px*4))] min-h-[720px] bg-[#212325] rounded-[36px] p-[48px] flex items-center">
        <div className="max-w-[378px] mx-auto">{children}</div>
      </div>

      <div className="scroll-btn mt-[24px] opacity-30">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <span>
          <span className="mouse">
            <span></span>
          </span>
        </span>
      </div>
    </section>
  )
}

const Sections: React.FC = () => {
  useEffectOnce(() => {
    const sections = document.querySelectorAll(".lg-sections .home-section")

    const handleShow = (prev: number, index: number) => {
      const prevSection = sections[prev]
      prevSection.classList.add("hidden")
      prevSection.classList.add("animate__fadeOut")
      prevSection.classList.remove("block")
      prevSection.classList.remove("animate__fadeIn")

      const current = sections[index]
      current.classList.remove("hidden")
      current.classList.remove("animate__fadeOut")
      current.classList.add("block")
      current.classList.add("animate__fadeIn")
    }

    for (let i in sections) {
      if (sections.hasOwnProperty(i)) {
        sections[i].classList.add("hidden")
      }
    }
    sections[0].classList.remove("hidden")
    sections[0].classList.add("block")
    sections[0].classList.add("animate__fadeIn")

    const maxIndex = sections.length - 1

    const previous = () => {
      isAnimating = true
      const prev = current

      current -= 1
      if (current < 0) current = 0

      if (prev !== current) {
        handleShow(prev, current)
      }

      setTimeout(() => {
        isAnimating = false
      }, 1300)
    }
    const next = () => {
      isAnimating = true
      const prev = current

      current += 1
      if (current > maxIndex) current = maxIndex

      if (prev !== current) {
        handleShow(prev, current)
      }

      setTimeout(() => {
        isAnimating = false
      }, 1300)
    }

    Observer.create({
      target: window,
      type: "wheel, touch, scroll, pointer",
      onUp: () => {
        !isAnimating && next()
      },
      onDown: () => {
        !isAnimating && previous()
      },
      wheelSpeed: -1,
      tolerance: 10,
    })
  })

  return (
    <div className="hidden lg-sections max-h-screen max-w-[80%] lg:flex items-center">
      <RawSections />
    </div>
  )
}

export const RawSections = () => {
  return (
    <>
      <Section>
        <div className="flex flex-col justify-between gap-[35px]">
          <img
            className="w-[70px] md:w-[90px] mx-auto block"
            src={"/images/queen-logo.png"}
            alt="logo"
          />
          <div className="text-center">
            <h1 className="text-[22px] md:text-[32px] font-bold">
              Your Chess, Your Narrative
            </h1>
            <p className="text-[23px] opacity-60 text-center leading-[30.36px] text-[400] mt-[4px]">
              Delve into a journey with bespoke pieces, face novel challenges,
              and traverse a landscape where every move is a reflection of you
            </p>
          </div>
          <img
            className="w-[300px] mx-auto block"
            src={"/images/double-pawn.png"}
            alt="logo"
          />
          <div className="text-center">1</div>
        </div>
      </Section>
      <Section>
        <div className="flex flex-col justify-between gap-[35px]">
          <img
            className="w-[70px] md:w-[90px] mx-auto block"
            src={"/images/knight-logo.png"}
            alt="logo"
          />
          <div className="text-center">
            <h1 className="text-[22px] md:text-[32px] font-bold">
              Maximize Your Chess Mastery
            </h1>
            <p className="text-[23px] opacity-60 text-center leading-[30.36px] text-[400] mt-[4px]">
              Train with our tools, solve complex puzzles, and analyze deeply.
              Outplay rivals move by move
            </p>
          </div>
          <img
            className="w-[300px] mx-auto block"
            src={"/images/tactic-sheet.png"}
            alt="logo"
          />
          <div className="text-center">2</div>
        </div>
      </Section>
      <Section>
        <div className="shrink-0 flex justify-center mt-[10%]">
          <img
            className="w-[70px] md:w-[90px]"
            src={"/images/rook-logo.png"}
            alt="logo"
          />
        </div>
        <div className="text-center mt-5">
          <h1 className="text-[22px] md:text-[32px] font-bold">
            Unlock Exclusive Rewards with In-Game NFTs
          </h1>
          <p className="text-[16px] md:text-[24px] mt-3 opacity-60 text-center">
            Collect MoveChess NFTs and unlock unmatched rewards
          </p>
        </div>
        <div className="shrink-0 flex justify-center mt-3 ml-9">
          <img
            className="w-[200px] md:w-[300px]"
            src={"/images/knight-3d.png"}
            alt="logo"
          />
        </div>
        <div className="text-center">3</div>
      </Section>
      <Section>
        <div className="flex flex-col justify-between gap-[35px]">
          <img
            className="w-[70px] md:w-[90px] mx-auto block"
            src={"/images/king-logo.png"}
            alt="logo"
          />

          <div className="text-center">
            <h1 className="text-[22px] md:text-[32px] font-bold">Community</h1>
            <p className="text-[23px] opacity-60 text-center leading-[30.36px] text-[400] mt-[4px]">
              Where Chess Enthusiasts Connect
            </p>
          </div>

          <div className="flex gap-4">
            <a
              className="text-center bg-[#B3FF77] px-[24px] py-[18px] rounded-[62px] text-black uppercase text-[18px] font-[700] tracking-widest flex items-center justify-between mx-auto gap-[10px]"
              href="https://discord.com/invite/NsjZBsSSEq"
              target="_blank"
            >
              <DiscordAlt size={26.4} />
              Discord
            </a>
            <a
              className="bg-[#B3FF77] px-[24px] py-[18px] rounded-[62px] text-black uppercase text-[18px] font-[700] tracking-widest flex items-center justify-between gap-[10px]"
              href="https://twitter.com/dechess_io"
              target="_blank"
            >
              <Twitter size={26.4} /> Twitter
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}

export default Sections
