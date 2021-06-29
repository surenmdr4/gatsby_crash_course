import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Menu from "../components/menu"

const IndexPage = () => (
  <Layout>
    <Menu />
    <StaticImage
      src="../images/company_bg.jpg"
      width={920}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <h1>About TRMTracker</h1>
    <p>TRMTracker.com offers a set of Tier-1 Energy Trading and Risk Management functionality as Software-as-a-Service (SaaS). Our set of standard tools across the Front, Middle and Back office will be an asset for any company looking to streamline their business processes. TRMTracker.com meets the needs of companies that do not require customized enterprise level solutions with a self-serving, rapid deployment environment..</p>
    <p>As an end-to-end integrated ETRM software solution, TRMTracker.com supports the entire trading cycle from trade capture and contract management, to portfolio management, risk controls, collateral and credit management, to settlement, along with workflow, data import and innovative reporting capability.</p><br/>
    
    <p>
      <Link to="/page-2/" >Go to page 2</Link> <br />
      {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    </p>
  </Layout>
)

export default IndexPage
