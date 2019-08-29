import React from "react"
import { graphql } from "gatsby"
import rehypeReact from "rehype-react"
import styled from "styled-components"
import Layout from "../components/layout"
import Uniform from "../components/uniform"
import TableOfContents from "../components/tableOfContents"

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

export default ({ data }) => {
  const content = data.markdownRemark
  return (
    <Layout>
      <div>
        <img src={content.frontmatter.banner} alt="banner" />
        <h1>{content.frontmatter.title}</h1>
        {content.frontmatter.toc && (
          <TableOfContents html={content.tableOfContents} />
        )}
        <Content>{renderAst(content.htmlAst)}</Content>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        banner
        title
        toc
      }
      tableOfContents(maxDepth: 3)
    }
  }
`
