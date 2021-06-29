import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Menu from "../components/menu"


const ServicesPage = () => (
  <Layout>
    <Menu/>
    <h1>Our Features</h1>
    <p>We offer a wide range of Trading and Risk Management and Environmental software solutions.</p>
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        flexDirection:'column',
        margin: '0px'
        
      }}
    >
      <li><Link to="#">Single Entry Deal Capture Flows Through Deal's Entire Lifecycle</Link></li>
      <li><Link to="#">Template-Based Deal Entry</Link></li>
      <li><Link to="#">User-Defined or Pre-Populated Fields for Deal Creation</Link></li>
      <li><Link to="#">Deal Valuation</Link></li>
      <li><Link to="#">Robust Price Curve Management</Link></li>


    </ul>

    

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ServicesPage



