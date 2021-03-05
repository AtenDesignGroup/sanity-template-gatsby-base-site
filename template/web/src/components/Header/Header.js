import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import Navigation from './Navigation'

const Header = () => {
  const data = useStaticQuery(graphql`
  {
      mainNav:  sanityNavigation(_id: { eq: "mainNav" }) {
        links {
          _key
          title
          siteLink
          links {
            _key
            title
            siteLink
          }
        }
      }
  }
  `)
  // console.log(data.mainNav)
  return (
    <div>
      <nav>
        <Navigation nav={data.topMiniNav} />
      </nav>

      <div>
        <Link to='/' aria-label='Logo'>
          Logo
        </Link>
      </div>

      <nav role='navigation' aria-label='Main menu'>
        <Navigation nav={data.mainNav} main top={data.topMiniNav} />
      </nav>

    </div>

  )
}

export default Header
