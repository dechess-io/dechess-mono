import academyPuzzle from '@/public/images/area-academy-puzzle.svg'
import questMasterBackground from '@/public/images/area-quest-master-bg.svg'
import questMasterStoneEffect from '@/public/images/area-quest-master-stone-effect.svg'
import questMasterStone from '@/public/images/area-quest-master-stone.svg'
import tournamentBackground from '@/public/images/area-tournament-bg.svg'
import tournamentCupEffect from '@/public/images/area-tournament-cup-effect.svg'
import tournamentCup from '@/public/images/area-tournament-cup.svg'

import NextImage from '../NextImage'
import PlayNow from '../PlayNow'

const Area = () => {
  return (
    <section className="min-h-[100vh] lg:min-h-[200vh] flex items-center bg-area">
      <div className="container">
        <div className="grid gap-6 justify-center">
          <div className="grid gap-6">
            <h2
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              id="dechess-area"
              className="scroll-section font-planet text-2xl md:text-3xl md:leading-[4.625rem] text-center"
            >
              DeChess Arena
            </h2>
            <div data-aos="fade-in" className="flex justify-center">
              <div className="lg:text-normal font-light max-w-[1000px] text-center grid gap-2">
                <p>
                  Welcome to{' '}
                  <span className="font-medium text-primary-4ff">
                    Chess Arena
                  </span>
                  , the heart of Dechess where strategy and skill converge in
                  exhilarating chess mastery.
                </p>
                <p>
                  Whether you're a seasoned grandmaster or a curious beginner,
                  our dynamic platform offers an engaging challenge for players
                  of all levels.
                </p>
                <p>
                  Dive in and experience the excitement of chess like never
                  before!
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-2">
              <div
                data-aos="fade-right"
                data-aos-easing="ease-in-sine"
                className="relative"
              >
                <NextImage
                  src={questMasterBackground}
                  width={360}
                  height={300}
                  alt="dechess-quest-master-background"
                />
                <div className="absolute pb-10 z-10 inset-0 flex justify-center items-center">
                  <NextImage
                    src={questMasterStone}
                    width={255}
                    height={193}
                    alt="dechess-quest-master-stone"
                  />

                  <div className="absolute z-0 duration-[10000ms] animate-ping">
                    <NextImage
                      src={questMasterStoneEffect}
                      width={255}
                      height={193}
                      alt="dechess-quest-master-stone-effect"
                    />
                  </div>
                </div>
                <h3 className="text-xl absolute left-0 right-0 bottom-8 text-center">
                  Quest Master
                </h3>
              </div>
              <div data-aos="fade-in" className="relative">
                <NextImage
                  src={tournamentBackground}
                  width={360}
                  height={300}
                  alt="dechess-tournament-background"
                />
                <div className="absolute pb-10 inset-0 flex justify-center items-center">
                  <NextImage
                    src={tournamentCup}
                    width={200}
                    height={150}
                    alt="dechess-tournament-cup"
                  />

                  <div className="absolute z-0 duration-[10000ms] animate-ping">
                    <NextImage
                      src={tournamentCupEffect}
                      width={200}
                      height={150}
                      alt="dechess-tourmanent-cup-effect"
                    />
                  </div>
                </div>
                <h3 className="text-xl absolute left-0 right-0 bottom-8 text-center">
                  Tournament
                </h3>
              </div>
              <div
                data-aos="fade-left"
                data-aos-easing="ease-in-sine"
                className="relative"
              >
                <NextImage
                  src={academyPuzzle}
                  width={360}
                  height={300}
                  alt="dechess-academy-background"
                />

                <h3 className="text-xl absolute left-0 right-0 bottom-8 text-center">
                  DeChess Academy
                </h3>
              </div>
            </div>
            <PlayNow />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Area
