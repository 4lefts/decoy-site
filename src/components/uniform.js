import React from "react"
import pmg from "../images/uniform/pmg.jpg"
import pandb from "../images/uniform/priceAndBuckland.jpg"
import schooltrends from "../images/uniform/schoolTrends.jpg"
import myclothing from "../images/uniform/my-clothing-logo.png"

export default () => {
  return (
    <div>
      <a
        href="http://pmgschoolwear.co.uk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={pmg} alt="PMG schoolwear uniform" />
      </a>
      <a
        href="https://www.pbuniform-online.co.uk/decoy"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={pandb} alt="Price and Buckland uniform" />
      </a>
      <a
        href="http://www.schooltrends.co.uk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={schooltrends} alt="School Trends uniform" />
      </a>
      <a
        href="https://myclothing.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={myclothing} alt="My Clothing uniform" />
      </a>
    </div>
  )
}
