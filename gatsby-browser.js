/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import { FirebaseAppProvider } from "reactfire"
import "firebase/auth"

const firebaseConfig = {
  /*

  Your firebase config, https://firebase.google.com/docs/web/setup/#add-sdks-initialize

  */
}

export const wrapRootElement = ({ element }) => (
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    {element}
  </FirebaseAppProvider>
)
