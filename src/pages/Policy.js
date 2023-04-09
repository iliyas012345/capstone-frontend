import React from 'react'
import Layout from '../components/Layout/Layout'

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="https://www.paperflite.com/sites/default/files/2019-10/product-catalog.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>This is only for using buying app  </p>
          <p>This is only for used created card system  </p>
          <p>This is not exchange  </p>
          
        </div>
      </div>
    </Layout>
  )
}

export default Policy