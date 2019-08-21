import React from "react"
import rehypeReact from "rehype-react"
import Layout from "../components/layout"
import Uniform from "../components/uniform"
import { graphql } from "gatsby"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { uniform: Uniform },
}).Compiler

const People = props => (
  <div>
    {props.people.map(person => (
      <figure key={person.description}>
        <img src={person.picture} alt={person.description} />
        <figcaption>{person.description}</figcaption>
      </figure>
    ))}
  </div>
)

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
        <People people={content.frontmatter.people} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        toc
        people {
          picture
          description
        }
      }
      htmlAst
      tableOfContents(maxDepth: 3)
    }
  }
`
