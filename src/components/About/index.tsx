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
              <span className="text-primary-4ff">Brilliant</span> <br />{' '}
            </LinkPreview>{' '}
            <LinkPreview
              url=""
              imageSrc={'/images/cover.svg'}
              isStatic
              className="font-bold"
            >
              <span className="text-primary-4ff">Moves</span>{' '}
            </LinkPreview>
            Begin
          </h1>
          <p
            data-aos="fade-right"
            data-aos-duration="1500"
            className="lg:text-normal"
          >
            Unleash your strategy, perfect your <br /> play, and rise to chess
            mastery
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
