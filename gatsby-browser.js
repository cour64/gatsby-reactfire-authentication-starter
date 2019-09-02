/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import { FirebaseAppProvider } from "reactfire"
import "firebase/auth"

// Replace with your own firebase config, https://firebase.google.com/docs/web/setup/#add-sdks-initialize
const firebaseConfig = {
  apiKey: "AIzaSyD_oETmp0bVEaaIpVsxN-eg-4dvEajiwxs",
  authDomain: "gatsby-test-8203f.firebaseapp.com",
  databaseURL: "https://gatsby-test-8203f.firebaseio.com",
  projectId: "gatsby-test-8203f",
  storageBucket: "",
  messagingSenderId: "31072557606",
  appId: "1:31072557606:web:a4ee244341d3f75b",
}

export const wrapRootElement = ({ element }) => (
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    {element}
  </FirebaseAppProvider>
)
