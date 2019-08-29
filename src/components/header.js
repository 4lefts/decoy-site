import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
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
  padding: ${rhythm(1)} 10px;
  margin: 0 auto;
  display: flex;
  flex-grow: 1;
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
  @media screen and (max-width: 580px) {
    flex-direction: column;
    align-items: flex-start;
    a h1 {
      padding-bottom: ${rhythm(1)};
    }
  }
`
const Nav = styled.nav`
  h4 {
    display: inline;
    font-weight: 700;
    margin-left: 15px;
    &:first-child {
      margin-left: 0;
    }
    a {
      text-decoration: none;
      &:hover {
        color: #004d20;
      }
      &.active {
        border-bottom: 1px solid white;
      }
      transition: color 0.4s ease-in-out;
    }
  }
`

const Navigation = () => (
  <Nav>
    <h4>
      <Link to="/about-us" activeClassName="active" partiallyActive={true}>
        About Us
      </Link>
    </h4>
    <h4>
      <Link to="/parents" activeClassName="active" partiallyActive={true}>
        Parents
      </Link>
    </h4>
    <h4>
      <Link to="/information" activeClassName="active" partiallyActive={true}>
        Information
      </Link>
    </h4>
    <h4>
      <Link to="/contact" activeClassName="active" partiallyActive={true}>
        Contact
      </Link>
    </h4>
  </Nav>
)

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
