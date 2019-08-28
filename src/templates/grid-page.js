import React from "react"
import { graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import rehypeReact from "rehype-react"
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

const PeopleGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 10px;
  }
`

const Person = styled.figure`
  margin: 0;
  min-width: 300px;
  img {
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);
    margin: 0;
  }
  figcaption {
    margin: 0;
  }
`

const People = props => (
  <PeopleGrid>
    {props.people.map(person => (
      <Person key={person.description}>
        <img src={person.picture} alt={person.description} />
        <figcaption>{person.description}</figcaption>
      </Person>
    ))}
  </PeopleGrid>
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
