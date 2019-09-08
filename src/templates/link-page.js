import React from "react"
import { graphql } from "gatsby"
// import { rhythm } from "../utils/typography"
import styled from "styled-components"
import LinkBtn from "../components/linkbtn"
import Layout from "../components/layout"
import Content from "../components/content"

const LinkGrid = styled.div`
  max-width: 960px;
  margin: 0 auto;
  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 10px;
  }
`

const Links = props => (
  <LinkGrid>
    {props.links.map(link => (
      <LinkBtn address={link.address} text={link.text} />
    ))}
  </LinkGrid>
)

export default ({ data }) => {
  const content = data.markdownRemark
  return (
    <Layout>
      <div>
        <Content
          title={content.frontmatter.title}
          tocHtml={content.frontmatter.toc ? content.tableOfContents : null}
          htmlAst={content.htmlAst}
        />
        {content.frontmatter.searchable && <div>Search box will be here.</div>}
        <Links links={content.frontmatter.links} />
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
        links {
          text
          address
        }
        searchable
      }
      htmlAst
      tableOfContents(maxDepth: 3)
    }
  }
`
