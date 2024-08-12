import React, { Fragment } from 'react'

import About from '@/components/About'
import Academy from '@/components/Academy'
import Area from '@/components/Area'
import Mail from '@/components/Mail'
import RoadMap from '@/components/RoadMap'

const HomeView = () => {
  return (
    <Fragment>
      <About />
      <Area />
      <Academy />
      <RoadMap />
      <Mail />
    </Fragment>
  )
}

export default HomeView
