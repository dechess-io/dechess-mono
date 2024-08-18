import React, { ReactNode } from 'react'

import Footer from '../Footer'
import Header from '../Header'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-white-fe">
      <Header />
      <main className='min-h-screen'>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
