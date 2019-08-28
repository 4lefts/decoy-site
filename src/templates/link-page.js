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

const LinkGrid = styled.div`
  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
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
