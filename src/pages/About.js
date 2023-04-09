import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About us - Item catalog"}>
    <div className="row contactus ">
      <div className="col-md-6 ">
        <img
          src="https://img.freepik.com/free-vector/about-us-concept-illustration_114360-669.jpg"
          alt="contactus"
          style={{ width: "100%" }}
        />
      </div>
      <div className="col-md-4">
        <p className="text-justify mt-2">
       <h1>PRODUCT CATALOG</h1>
Contains all commercial product information that enables product marketing managers to define and map new product offerings.
 This encompasses certain sets of tools that allow configuration of new products and service bundles, pricing and discounts.
        </p>
      </div>
    </div>
  </Layout>
  )
}

export default About