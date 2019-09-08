import React from "react"
import rehypeReact from "rehype-react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import Uniform from "../components/uniform"
import LinkBtn from "../components/linkbtn"
import TableOfContents from "../components/tableOfContents"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    uniform: Uniform,
    linkbtn: LinkBtn,
  },
}).Compiler

const Content = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: ${rhythm(2)} 10px 0 10px;
`

const MainHtml = styled.div`
  a {
    color: #009423;
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
  .btn {
    display: block;
    max-width: 475px;
    text-decoration: none;
    color: white;
    background: #009624;
    padding: ${rhythm(0.67)} 1em;
    border-radius: 5px;
    margin: ${rhythm(0.67)} 0 ${rhythm(0.33)} 0;
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
    @supports (display: grid) {
      margin-bottom: 0;
    }
  }
`

export default ({ title, tocHtml, htmlAst }) => (
  <Content>
    <h1>{title}</h1>
    {tocHtml && <TableOfContents html={tocHtml} />}
    <MainHtml>{renderAst(htmlAst)}</MainHtml>
  </Content>
)
