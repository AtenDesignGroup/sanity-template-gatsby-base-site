import React from 'react'
import {Location} from '@reach/router'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <a href='#main'>Skip to main</a>
    <Location children={children}>
      {({location}) => {
        return (
          <div>
            <Header
              location={location.pathname}
              siteTitle={siteTitle}
              onHideNav={onHideNav}
              onShowNav={onShowNav}
              showNav={showNav}
            />

            <div id='main'>
              {[children]}
            </div>
          </div>
        )
      }}
    </Location>
    <Footer />
  </>
)

export default Layout
