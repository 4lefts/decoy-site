import React from "react"
import rehypeReact from "rehype-react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import Uniform from "../components/uniform"
import TableOfContents from "../components/tableOfContents"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { uniform: Uniform },
}).Compiler

const Content = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: ${rhythm(2)} 10px 0 10px;
`

const MainHtml = styled.div`
  a {
    color: #009423;
    &:hover,
    &:active {
      color: #004d20;
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
