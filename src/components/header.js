import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import Navigation from "./navigation"

const HeaderContainer = styled.div`
  background: #009624;
  margin: 0;
  padding: 0;
  @supports (display: grid) {
    grid-column: 1/-1;
    grid-row: 1;
  }
`

const HeaderInner = styled.header`
  max-width: 960px;
  padding: ${rhythm(0.67)} 10px;
  margin: 0 auto;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
  }
  h1 {
    font-weight: 700;
    margin: 0;
    color: rgba(255, 255, 255, 0.85);
    transition: color 0.3s ease;
    &:hover {
      color: white;
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
