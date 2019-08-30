import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Content from "../components/content"
import TableOfContents from "../components/tableOfContents"

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
        <Content htmlAst={content.htmlAst} />
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
