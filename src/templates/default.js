import React from "react"
import rehypeReact from "rehype-react"
import Layout from "../components/layout"
import Uniform from "../components/uniform"
import { graphql } from "gatsby"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { uniform: Uniform },
}).Compiler

export default ({ data }) => {
  const content = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{content.frontmatter.title}</h1>
        {content.frontmatter.toc && (
          <div dangerouslySetInnerHTML={{ __html: content.tableOfContents }} />
        )}
        <div>{renderAst(content.htmlAst)}</div>
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
