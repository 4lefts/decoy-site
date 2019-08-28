import React from "react"
import { graphql } from "gatsby"
import rehypeReact from "rehype-react"
import { rhythm } from "../utils/typography"
import styled from "styled-components"
import Layout from "../components/layout"
import Uniform from "../components/uniform"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { uniform: Uniform },
}).Compiler

const TableOfContents = styled.div`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0 0 ${rhythm(2)} 0;
    a {
      color: #009423;
      font-style: italic;
      &:hover,
      &:active {
        color: #004d20;
      }
    }
  }
`

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
        <h1>{content.frontmatter.title}</h1>
        {content.frontmatter.toc && (
          <>
            <h3>What's on this page?</h3>
            <TableOfContents
              dangerouslySetInnerHTML={{ __html: content.tableOfContents }}
            />
          </>
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
        title
        toc
      }
      tableOfContents(maxDepth: 3)
    }
  }
`
