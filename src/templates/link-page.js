import React from "react"
import { graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import styled from "styled-components"
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

const LinkBtn = styled.a`
  display: block;
  text-decoration: none;
  background: #009624;
  padding: ${rhythm(0.67)} 1em;
  border-radius: 5px;
  margin-bottom: ${rhythm(0.33)};
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);
  h3 {
    color: white;
    font-weight: 700px;
    margin: 0;
  }
  &:hover {
    background: #ffd600;
    h3 {
      color: #004d20;
    }
  }
  transition: all 0.3s ease;
  @supports (display: grid) {
    margin-bottom: 0;
  }
`

const Links = props => (
  <LinkGrid>
    {props.links.map(link => (
      <LinkBtn href={link.address}>
        <h3>{link.text}</h3>
      </LinkBtn>
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
