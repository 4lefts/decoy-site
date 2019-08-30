import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import menu from "../images/icons/menu.svg"
import close from "../images/icons/close.svg"

const NavContent = () => (
  <>
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
  </>
)

const WideNav = styled.nav`
  h4 {
    display: inline;
    font-weight: 700;
    margin: 0;
    padding: 0 10px;
    border-right: 2px solid white;
    &:first-child {
      border-left: 2px solid white;
    }
    @media screen and (max-width: 960px) {
      &:first-child {
        border-left: 0;
      }
      &:last-child {
        border-right: 0;
      }
    }
    a {
      text-decoration: none;
      &:hover {
        color: #ffd600;
        &.active {
          border-color: #ffd600;
        }
      }
      &.active {
        color: #ffd600;
      }
      transition: all 0.3s ease;
    }
  }
  @media screen and (max-width: 580px) {
    display: none;
  }
`

const NarrowNavContainer = styled.div`
  display: none;

  @media screen and (max-width: 580px) {
    display: block;
  }
`

const NarrowNavContent = styled.nav`
  z-index: 100;
  width: 0;
  overflow: hidden;
  white-space: nowrap;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  background: #004d20;
  box-shadow: -10px 0px 30px rgba(0, 0, 0, 0.7);
  transition: width 0.3s;
  &::before {
    content: "";
    position: fixed;
    background: rgba(0, 0, 0, 0.3);
    left: 0;
    top: 0;
    width: 0;
    height: 100vh;
    z-index: -1;
  }
  &.open {
    width: 200px;
    &::before {
      width: 100vw;
    }
  }
  button {
    align-self: flex-end;
    margin: ${rhythm(0.67)} 10px;
  }
  h4 {
    font-weight: 700;
    padding: ${rhythm(0.3)} 10px;
    width: 100%;
    text-align: right;
    border-bottom: 2px solid white;
    a {
      text-decoration: none;
      &:hover {
        color: #ffd600;
        &.active {
          border-color: #ffd600;
        }
      }
      &.active {
        color: #ffd600;
      }
      transition: all 0.3s ease;
    }
  }
`
const IconButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin: 0;
    width: 28px;
    height: 28px;
  }
`

class NarrowNav extends React.Component {
  constructor() {
    super()
    this.state = {
      menuIsOpen: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    console.log(this.state.menuIsOpen)
    this.setState(state => ({ menuIsOpen: !state.menuIsOpen }))
    console.log(this.state.menuIsOpen)
  }

  render() {
    return (
      <NarrowNavContainer>
        <IconButton onClick={() => this.setState({ menuIsOpen: true })}>
          <img src={menu} alt="open menu button" />
        </IconButton>
        <NarrowNavContent
          className={
            this.state.menuIsOpen ? "menu-content open" : "menu-content"
          }
        >
          <IconButton onClick={() => this.setState({ menuIsOpen: false })}>
            <img src={close} alt="close menu button" />
          </IconButton>
          {this.props.children}
        </NarrowNavContent>
      </NarrowNavContainer>
    )
  }
}

export default () => (
  <>
    <WideNav>
      <NavContent />
    </WideNav>
    <NarrowNav>
      <NavContent />
    </NarrowNav>
  </>
)
