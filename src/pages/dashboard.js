import React from "react"
import { Link } from "gatsby"
import { useUser, useFirebaseApp } from "reactfire"

import Image from "../components/image"
import SEO from "../components/seo"

const Dashboard = () => {
  const user = useUser()
  const firebase = useFirebaseApp()

  function handleLogout() {
    firebase.auth().signOut()
  }

  return (
    <>
      <SEO title="Home" />
      <h1>Welcome back {user && user.displayName}</h1>
      <p>This is a protected page and you have sucessfully been logged in</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <button onClick={handleLogout}>Logout</button>
      <br />
      <Link to="/">Go to home</Link>
    </>
  )
}

export default Dashboard
