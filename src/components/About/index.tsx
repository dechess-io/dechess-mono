import { LinkPreview } from '../ui/link-preview'

const About = () => {
  return (
    <section
      id="dechess-about"
      className="bg-image bg-about scroll-section relative min-h-screen flex items-center"
    >
      <div className="container">
        <div className="relative z-[1] flex justify-center h-full flex-col">
          <h1
            data-aos="fade-right"
            className="font-planet text-2xl md:text-3xl md:leading-[4.625rem]"
          >
            DeChess, <br /> Where{' '}
            <LinkPreview
              url=""
              isStatic
              imageSrc={'/images/banner.svg'}
              className="font-bold"
            >
              <span className="bg-gradient-to-r from-yellow-17 to-yellow-43 bg-clip-text text-transparent">
                Brilliant
              </span>{' '}
              <br />{' '}
            </LinkPreview>{' '}
            <LinkPreview
              url=""
              imageSrc={'/images/cover.svg'}
              isStatic
              className="font-bold"
            >
              <span className="text-yellow-17">
                Moves
              </span>{' '}
            </LinkPreview>
            Begin
          </h1>
          <p
            data-aos="fade-right"
            data-aos-duration="1500"
            className="lg:text-normal"
          >
            Command your pieces like a Pharaoh in a <br /> game where each move
            carries the weight of an empire.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
