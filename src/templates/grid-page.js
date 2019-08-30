import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Content from "../components/content"

const PeopleGrid = styled.div`
  max-width: 960px;
  margin: 0 auto;
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
