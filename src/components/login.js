import React, { useState } from "react"
import { navigate } from "gatsby"
import { useFirebaseApp } from "reactfire"

const LoginForm = () => {
  const firebase = useFirebaseApp()
  const [state, setState] = useState({ email: "", password: "" })
  const [error, setError] = useState(false)

  function handleInputChange({ target }) {
    setError(false)
    setState({
      ...state,
      [target.name]: target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    firebase
      .auth()
      .signInWithEmailAndPassword(state.email, state.password)
      .then(() => {
        navigate("/user-hub/")
      })
      .catch(e => {
        setError(e.message)
      })
  }

  return (
    <>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <input type="submit" />
      </form>
    </>
  )
}

export default LoginForm
