import React from 'react'

import roadmapRockQ3 from '@/public/images/roadmap-rock-q3.png'
import roadmapRockQ4 from '@/public/images/roadmap-rock-q4.png'

import NextImage from '../NextImage'
import { ContainerScroll } from '../ui/container-scroll-animation'
import RoadMapItem from './RoadMapItem'

const RoadMap = () => {
  return (
    <section className="bg-image bg-roadmap">
      <div className="container">
        <div className="min-h-[200vh] lg:min-h-[250vh] flex justify-center items-center">
          <div className="grid gap-10 lg:gap-20">
            <h2
              id="dechess-roadmap"
              data-aos="fade-down"
              data-aos-anchor-placement="top-bottom"
              className="scroll-section font-planet text-2xl md:text-3xl md:leading-[4.625rem] text-center"
            >
              DeChess Roadmap
            </h2>

            <div className="grid gap-10 lg:gap-20">
              <ContainerScroll titleComponent="">
                <div className="flex flex-wrap items-center gap-4 lg:gap-40">
                  <NextImage
                    src={roadmapRockQ3}
                    width={360}
                    height={300}
                    alt="dechess-roadmap-rock-q3"
                  />
                  <div className="grid gap-4">
                    <h3 className="text-xl lg:text-[40px] font-medium">Q3- DeChess V1</h3>
                    <RoadMapItem text="Basic Gameplay" />
                    <RoadMapItem text="ELO/Points/Leaderboard System" />
                    <RoadMapItem text="Gamification System" />
                  </div>
                </div>
              </ContainerScroll>

              <ContainerScroll titleComponent="">
                <div className="flex flex-row-reverse flex-wrap items-center gap-4 lg:gap-40">
                  <NextImage
                    src={roadmapRockQ4}
                    width={360}
                    height={300}
                    alt="dechess-roadmap-rock-q3"
                  />
                  <div className="grid gap-4">
                    <h3 className="text-xl lg:text-[40px] font-medium">Q4- DeChess V2</h3>
                    <RoadMapItem text="DeChess Smart Contract Development" />
                    <RoadMapItem text="Puzzles System" />
                    <RoadMapItem text="Achievement/NFTs System" />
                    <RoadMapItem text="Game Subscription/Season Pass" />
                  </div>
                </div>
              </ContainerScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadMap
