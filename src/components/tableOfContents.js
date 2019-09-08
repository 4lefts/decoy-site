import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

const TableOfContents = styled.div`
  padding-bottom: ${rhythm(1)};
  ul {
    list-style-type: disc;
    a {
      color: #009423;
      font-style: italic;
      &:link,
      &:visited {
        color: #009423;
      }
      &:hover,
      &:active {
        color: #004d20;
      }
      transition: all 0.3s ease-in-out;
    }

    ul {
      padding-bottom: 0;
      list-style-type: circle;
    }
  }
`

export default ({ html }) => (
  <>
    <h3>What's on this page?</h3>
    <TableOfContents dangerouslySetInnerHTML={{ __html: html }} />
  </>
)
