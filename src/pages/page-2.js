import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Carousel from "../components/carousel"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Carousel></Carousel>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
