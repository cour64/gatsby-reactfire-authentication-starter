# gatsby-reactfire-authentication-starter

A simple starter to get up and developing quickly with Gatsby and Firebase (reactfire). This starter builds on top of the official [Gatsby default starter](https://github.com/gatsbyjs/gatsby-starter-default). It adds authentication using the firebase service. Firebase is managed using the latest version of the community developed [Reactfire](https://github.com/FirebaseExtended/reactfire) library.

## Setup

Setup of the starter is simple, just provide your firebase config in the `gatsby-browser.js` file and you're all set!

## How does it all work?

This starter uses the Reactfire library to give you access to firebase using the hooks it provides. The Reactfire library needs a context provider to use the hooks, we setup the context provider by wrapping the root element like so:

#### **`gatsby-browser.js`**

```javascript
const wrapRootElement = ({ element }) => (
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    {element}
  </FirebaseAppProvider>
)
```

Once the context provider is setup the firebase JS SDK can be retrieved via hooks. Authentication is handled using [client-only routing](https://www.gatsbyjs.org/tutorial/authentication-tutorial/#creating-client-only-routes). The nifty [`AuthCheck`](https://github.com/FirebaseExtended/reactfire/blob/master/docs/reference.md#AuthCheck) component, provided by [Reactfire](https://github.com/FirebaseExtended/reactfire), can be used to listen to the sign in state and redirect if the user tries to access a protected page or signs out. The `AuthCheck` component works with custom claims too giving you fine grained control over user roles and permissions.
