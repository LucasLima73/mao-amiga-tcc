'use client'
import Backtotop from '../../../shared/layout-components/backtotop/backtotop'
import Footer from '../../../shared/layout-components/footer/footer'
import Header from '../../../shared/layout-components/header/header'
import Sidebar from '../../../shared/layout-components/sidebar/sidebar'
import Switcher from '../../../shared/layout-components/switcher/switcher'
import React, { useEffect, useState } from 'react'

const Layout = ({ children }) => {
  const [lateLoad, setlateLoad] = useState(false)
  useEffect(() => {
    setlateLoad(true)
  })
  return (
    <>
      <div style={{ display: `${lateLoad ? 'block' : 'none'}` }}>
        <Switcher />
        <div className="page">
          <Header />
          {/* <Sidebar/>*/}
          <div className="main-content app-content">
            <div className="container-fluid">{children}</div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
