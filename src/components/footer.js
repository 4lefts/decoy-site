import React from "react"
import styled from "styled-components"

const FooterOuter = styled.div`
  background: #2e7d32;
  color: white;
  margin: 0;
  padding: 0;
`

const FooterInner = styled.footer`
  max-width: 960px;
  margin: 0 auto;
`

export default () => (
  <FooterOuter>
    <FooterInner>
      <p>
        © {new Date().getFullYear()}, Decoy Community Primary School.
        <br />
        Deer Park Road, Newton Abbot, TQ12 1DH
        <br />
        <a href="tel:+441626353282">01626 353 282</a>
        <br />
        <a href="mailto:admin@decoyschool.co.uk">admin@decoyschool.co.uk</a>.
      </p>
    </FooterInner>
  </FooterOuter>
)
