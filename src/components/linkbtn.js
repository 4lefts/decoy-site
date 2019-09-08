import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

const LinkBtn = styled.a`
  display: block;
  max-width: 475px;
  text-decoration: none;
  color: white;
  background: #009624;
  padding: ${rhythm(0.67)} 1em;
  border-radius: 5px;
  margin: ${rhythm(0.33)} 0 ${rhythm(0.67)} 0;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);
  h3 {
    color: white;
    font-weight: 700px;
    margin: 0;
  }
  &:hover {
    background: #ffd600;
    h3 {
      color: #004d20;
    }
  }
  transition: all 0.3s ease;
`

export default ({ address, text }) => (
  <LinkBtn href={address}>
    <h3>{text}</h3>
  </LinkBtn>
)
