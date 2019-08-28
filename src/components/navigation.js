import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Nav = styled.nav`
  a {
    margin-left: 15px;
    color: white;
    text-decoration: none;
    &:hover {
      color: yellow;
    }
    &.active {
      border-bottom: 1px solid white;
    }
    transition: color 0.4s ease-in-out;
  }
`

export default () => (
  <Nav>
    <Link to="about-us" activeClassName="active" partiallyActive={true}>
      About Us
    </Link>
    <Link to="parents" activeClassName="active" partiallyActive={true}>
      Parents
    </Link>
    <Link to="information" activeClassName="active" partiallyActive={true}>
      Information
    </Link>
    <Link to="contact" activeClassName="active" partiallyActive={true}>
      Contact
    </Link>
  </Nav>
)
