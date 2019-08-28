import React from "react"
import { Link } from "gatsby"

export default () => (
  <nav>
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
  </nav>
)
