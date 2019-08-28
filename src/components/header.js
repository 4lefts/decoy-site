import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Navigation from "./navigation"

const HeaderContainer = styled.div`
  background: #2e7d32;
  color: white;
  margin: 0;
  padding: 0;
`

const HeaderInner = styled.header`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  h1 a {
    color: white;
    text-decoration: none;
    &:hover {
      color: yellow;
    }
  }
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderInner>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <Navigation />
    </HeaderInner>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
