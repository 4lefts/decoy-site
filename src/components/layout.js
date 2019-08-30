/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import Logos from "./logos"
import Footer from "./footer"
import "./reset.css"

const Page = styled.div`
  @supports (display: grid) {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr minmax(auto, 960px) 1fr;
    grid-template-rows: auto 1fr auto auto;
  }
`

const Main = styled.main`
  @supports (display: grid) {
    margin: 0;
    grid-column: 1/4;
    grid-row: 2;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Page>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
      <Logos />
      <Footer />
    </Page>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
