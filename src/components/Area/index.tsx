import Divider from '../Divider'
import PlayNow from '../PlayNow'
import Quest from '../Quest'

const Area = () => {
  return (
    <section className="min-h-[100vh] lg:min-h-[250vh] flex items-center bg-image bg-area">
      <div className="container grid gap-20 lg:gap-60">
        <div className="grid gap-6 justify-center">
          <div className="grid gap-6">
            <div className="grid gap-1">
              <h2
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                id="dechess-area"
                className="scroll-section font-planet text-2xl md:text-3xl md:leading-[4.625rem] text-center"
              >
                DeChess Arena
              </h2>
              <div className="flex justify-center">
                <Divider />
              </div>
              <h3 data-aos="fade-in" className="text-base lg:text-2xl font-planet text-center">
                The Chess of Eternity
              </h3>
            </div>
            <div data-aos="fade-in" className="flex justify-center">
              <div className="lg:text-normal font-light max-w-[1000px] text-center grid gap-2">
                <p>
                  Enter the battleground where the finest tacticians clash in
                  games of intellect and power, and your strategy determines the
                  destiny of the ancient world.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <PlayNow />
          </div>
        </div>
        <Quest />
      </div>
    </section>
  )
}

export default Area
