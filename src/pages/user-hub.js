import React, { Suspense, lazy } from "react"
import { Router } from "@reach/router"
import { AuthCheck } from "reactfire"

import Redirect from "../components/redirect"
import Layout from "../components/layout"
const Dashboard = lazy(() => import("../components/dashboard"))

const UserHubIndex = () => {
  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        <AuthCheck fallback={<Redirect to="/" />}>
          <Router basepath="user-hub">
            <Dashboard path="/" />
          </Router>
        </AuthCheck>
      </Suspense>
    </Layout>
  )
}

export default UserHubIndex
