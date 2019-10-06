import React from "react"
import styled from "styled-components"
import pmg from "../images/uniform/pmg.jpg"
import pandb from "../images/uniform/priceAndBuckland.jpg"
import schooltrends from "../images/uniform/schoolTrends.jpg"
import myclothing from "../images/uniform/my-clothing-logo.png"

const Uniform = styled.div`
  display: flex;
  justify-content: space-around;
  a {
    margin: 10px;
    text-align: center;
    text-decoration: none;
    color: initial;
  }
  img,
  figcaption,
  h4 {
    margin-bottom: 10px;
  }
`

export default () => {
  return (
    <Uniform>
      <a
        href="http://pmgschoolwear.co.uk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <figure>
          <img src={pmg} alt="PMG schoolwear uniform" />
          <figcaption>
            <h4>PMG Schoolwear</h4>
          </figcaption>
        </figure>
      </a>
      <a
        href="https://www.pbuniform-online.co.uk/decoy"
        target="_blank"
        rel="noopener noreferrer"
      >
        <figure>
          <img src={pandb} alt="Price and Buckland uniform" />
          <figcaption>
            <h4>Price and Buckland</h4>
          </figcaption>
        </figure>
      </a>
      <a
        href="http://www.schooltrends.co.uk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <figure>
          <img src={schooltrends} alt="School Trends uniform" />
          <figcaption>
            <h4>School Trends</h4>
          </figcaption>
        </figure>
      </a>
      <a
        href="https://myclothing.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <figure>
          <img src={myclothing} alt="My Clothing uniform" />
          <figcaption>
            <h4>My Clothing</h4>
          </figcaption>
        </figure>
      </a>
    </Uniform>
  )
}
