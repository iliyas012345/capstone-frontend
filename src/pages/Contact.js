import React from 'react'
import Layout from '../components/Layout/Layout'
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
    <div className="row contactus ">
      <div className="col-md-6 ">
        <img
          src="https://images.ctfassets.net/xj0skx6m69u2/6XtpFUVse6U43tKsCFlqK/716080a1a6e89a61c92968220f91155f/stockfresh_8245621_female-customer-services-agent-in-call-center_sizeS.jpg?fm=jpg&w=648&h=426&fit=fill&f=Right&q=85"
          alt="contactus"
          style={{ width: "100%" }}
        />
      </div>
      <div className="col-md-4">
        <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
        <p className="text-justify mt-2">
          any query and info about prodduct feel free to call anytime we 24X7
          vaialible
        </p>
        <p className="mt-3">
          <BiMailSend /> : www.help@itemcatalog.com
        </p>
        <p className="mt-3">
          <BiPhoneCall /> : 9825677886
        </p>
        <p className="mt-3">
          <BiSupport /> : 1800-0000-0000 (toll free)
        </p>
      </div>
    </div>
  </Layout>
  )
}

export default Contact