import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Content from "../components/content"

export default ({ data }) => {
  const content = data.markdownRemark
  return (
    <Layout>
      <div>
        <img src={content.frontmatter.banner} alt="banner" />
        <Content
          title={content.frontmatter.title}
          tocHtml={content.frontmatter.toc ? content.tableOfContents : null}
          htmlAst={content.htmlAst}
        />
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
