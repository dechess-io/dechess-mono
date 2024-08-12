import React from 'react'

import roadmapRockQ3 from '@/public/images/roadmap-rock-q3.svg'
import roadmapRockQ4 from '@/public/images/roadmap-rock-q4.svg'

import NextImage from '../NextImage'
import { ContainerScroll } from '../ui/container-scroll-animation'
import RoadMapItem from './RoadMapItem'

const RoadMap = () => {
  return (
    <section className="bg-image bg-roadmap">
      <div className="container">
        <div className="min-h-[250vh] flex justify-center items-center">
          <div className="grid gap-6 lg:gap-20">
            <h2
              id="dechess-roadmap"
              data-aos="fade-down"
              data-aos-anchor-placement="top-bottom"
              className="scroll-section font-planet text-2xl md:text-3xl md:leading-[4.625rem] text-center"
            >
              DeChess Roadmap
            </h2>

            <div className="grid gap-6 lg:gap-20">
              <ContainerScroll titleComponent="">
                <div className="flex flex-wrap items-center gap-4 lg:gap-40">
                  <NextImage
                    src={roadmapRockQ3}
                    width={360}
                    height={300}
                    alt="dechess-roadmap-rock-q3"
                  />
                  <div className="grid gap-4">
                    <RoadMapItem text="Enhance Game Engine Logic." />
                    <RoadMapItem text="Puzzles System." />
                    <RoadMapItem text="Achievement System." />
                    <RoadMapItem text="NFTs System." />
                    <RoadMapItem text="In-game Shop: NFTs, Key, Season Pass." />
                    <RoadMapItem text="Subscription System." />
                    <RoadMapItem text="Report System." />
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
                    <RoadMapItem text="Enhance Game Engine Logic." />
                    <RoadMapItem text="Puzzles System." />
                    <RoadMapItem text="Achievement System." />
                    <RoadMapItem text="NFTs System." />
                    <RoadMapItem text="In-game Shop: NFTs, Key, Season Pass." />
                    <RoadMapItem text="Subscription System." />
                    <RoadMapItem text="Report System." />
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
