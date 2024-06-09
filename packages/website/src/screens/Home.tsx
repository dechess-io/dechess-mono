import Sections, { RawSections } from "../components/Home/Sections"
import Hero from "../components/Home/Hero"

const Home: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto h-screen py-[79px] px-[24px] 2xl:px-0 lg:flex lg:justify-between">
      <Hero />
      <Sections />
      <div className="raw-sections flex flex-col gap-[32px] items-center mt-[120px] lg:hidden">
        <RawSections />
      </div>
    </div>
  )
}

export default Home
