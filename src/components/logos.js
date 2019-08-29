import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

import ofsted from "../images/logos/ofsted.png"
import parentmail from "../images/logos/parentmail-logo.png"
import ptasocial from "../images/logos/PTAlogo.png"
import facebook from "../images/logos/facebook-logo.png"
import twitter from "../images/logos/twitter-logo.png"
import thinkuknow from "../images/logos/thinkUKnow.png"
import snowflake from "../images/logos/snowflake.png"
import ttrockstars from "../images/logos/ttrockstars.png"

const Images = [
  {
    src: ofsted,
    alt: `link to our latest Ofsted report`,
    href: `https://reports.ofsted.gov.uk/provider/21/113209`,
  },
  {
    src: parentmail,
    alt: `link to log in to parent mail`,
    href: `https://pmx.parentmail.co.uk/#core/login`,
  },
  {
    src: ptasocial,
    alt: `link to log in to pta social`,
    href: `#`,
  },
  {
    src: twitter,
    alt: `link to twitter feed`,
    href: `https://twitter.com/decoypri`,
  },
  {
    src: facebook,
    alt: `link to our facebook page`,
    href: `https://www.facebook.com/decoy.pri`,
  },
  {
    src: thinkuknow,
    alt: `link to think u know online safety`,
    href: `https://www.thinkuknow.co.uk/`,
  },
  {
    src: ttrockstars,
    alt: `link to log in to times tables rockstars`,
    href: `https://play.ttrockstars.com/auth/school/student`,
  },
  {
    src: snowflake,
    alt: `link to manage email alerts from Devon County Council`,
    href: `https://public.govdelivery.com/accounts/UKDEVONCC/subscriber/new?qsp=UKDEVONCC_4`,
  },
]

const Imagelink = ({ src, alt, href }) => (
  <a href={href} rel="noreferrer">
    <img src={src} alt={alt} />
  </a>
)

const LogosOuter = styled.div`
  margin: 0;
  padding: 0;
  @supports (display: grid) {
    grid-column: 1/-1;
    grid-row: 3;
  }
`

const Logos = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: ${rhythm(1)} 10px 10px 10px;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  img {
    height: 50px;
  }
`

export default () => (
  <LogosOuter>
    <Logos>
      {Images.map(image => (
        <Imagelink src={image.src} alt={image.alt} href={image.href} />
      ))}
    </Logos>
  </LogosOuter>
)
