import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LoginForm from "../components/login"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Login</h1>
      <LoginForm />
      <Link to="/user-hub/">Go to user dashboard</Link>
    </Layout>
  )
}

export default IndexPage
