import React from "react"
import { graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import styled from "styled-components"
import LinkBtn from "../components/linkbtn"
import Layout from "../components/layout"
import Content from "../components/content"

const LinkGrid = styled.div`
  margin: 0 auto;
  @media screen and (min-width: 960px) {
    max-width: 960px;
  }
  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: ${rhythm(3.2)};
    grid-gap: 10px;
    padding: 0 10px;
    a {
      margin: 0; /* so buttons aren't too spread out, unlike those inline */
    }
  }
`

const Links = props => (
  <LinkGrid>
    {props.links.map(link => (
      <LinkBtn address={link.address} text={link.text} key={link.text} />
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
