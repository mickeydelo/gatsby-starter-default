import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Rubicks from "../images/rubicks.png"
import { StaticImage } from "gatsby-plugin-image"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>

    <img src={Rubicks} class="rubicks" alt="The Cube"/>
    
    <StaticImage
      className="rubicks-img"
      src="../images/rubicks.png"
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Rubics Cube"
      style={{ marginBottom: `1.45rem` }}
    />
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage