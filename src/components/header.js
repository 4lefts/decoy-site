import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Navigation from "./navigation"
import { rhythm } from "../utils/typography"

const HeaderContainer = styled.div`
  background: #00c853;
  margin: 0;
  padding: 0;
  @supports (display: grid) {
    grid-column: 1/-1;
    grid-row: 1;
  }
`

const HeaderInner = styled.header`
  max-width: 960px;
  padding: ${rhythm(1)} 0;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  a {
    color: white;
    text-decoration: none;
    &:hover {
      color: #004d20;
    }
    h1 {
      font-weight: 700;
      margin: 0;
      transition: color 0.4s ease-in-out;
    }
  }
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderInner>
      <Link to="/">
        <h1>{siteTitle}</h1>
      </Link>
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
