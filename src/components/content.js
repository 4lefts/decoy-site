import React from "react"
import rehypeReact from "rehype-react"
import Uniform from "../components/uniform"
import styled from "styled-components"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { uniform: Uniform },
}).Compiler

const Content = styled.div`
  a {
    color: #009423;
    &:hover,
    &:active {
      color: #004d20;
    }
  }
`

export default ({ htmlAst }) => <Content>{renderAst(htmlAst)}</Content>
