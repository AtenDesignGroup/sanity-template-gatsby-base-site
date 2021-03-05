import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Navigation from '../Header/Navigation'

export default function Footer () {
  const data = useStaticQuery(graphql`
  {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
    }
    footerNav: sanityNavigation(_id: { eq: "footerNav" }) {
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
  return (
    <footer>
      <Navigation nav={data.footerNav} />
      <span> &copy; {new Date().getFullYear()} {data.site.title} All Rights Reserved.</span>
    </footer>
  )
}
