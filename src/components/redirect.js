import { navigate } from "gatsby"

// Redirect to link provided
const Redirect = ({ to }) => {
  navigate(to)
  return null
}

export default Redirect
