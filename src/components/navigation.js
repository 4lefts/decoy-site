import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Nav = styled.nav`
  h4 {
    display: inline;
    font-weight: 700;
    a {
      text-decoration: none;
      margin-left: 15px;
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

export default () => (
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
