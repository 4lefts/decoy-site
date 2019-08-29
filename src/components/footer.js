import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

const FooterOuter = styled.div`
  background: #00c853;
  color: white;
  margin: 0;
  padding: 0;
  @supports (display: grid) {
    grid-column: 1/-1;
    grid-row: 4;
  }
`

const FooterInner = styled.footer`
  max-width: 960px;
  margin: 0 auto;
  padding: ${rhythm(1)} 10px 10px 10px;
  a {
    color: white;
    &:hover {
      color: #004d20;
    }
    transition: color 0.4s ease-in-out;
  }
`

export default () => (
  <FooterOuter>
    <FooterInner>
      <p>
        © {new Date().getFullYear()}, Decoy Community Primary School
        <br />
        Deer Park Road, Newton Abbot, TQ12 1DH
      </p>
      <p>
        Telephone: <a href="tel:+441626353282">01626 353 282</a>
      </p>
      <p>
        E-mail:{" "}
        <a href="mailto:admin@decoyschool.co.uk">admin@decoyschool.co.uk</a>.
      </p>
    </FooterInner>
  </FooterOuter>
)
