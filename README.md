# gatsby-reactfire-authentication-starter

A simple starter to get up and developing quickly with Gatsby and Firebase (reactfire).

## Features

- Authentication using [Firebase](https://firebase.google.com/) and [Reactfire](https://github.com/FirebaseExtended/reactfire)

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the hello-world starter.

    ```sh
    # create a new Gatsby site using the reactfire-authentication starter
    gatsby new reactfire-auth-starter https://github.com/cour64/gatsby-reactfire-authentication-starter
    ```

2.  **Create a firebase account.**

    Create a [firebase](https://firebase.google.com/) account, sign in and get your [config object](https://firebase.google.com/docs/web/setup#config-object). A simple guide on how to get started with firebase is [available here](https://firebase.google.com/docs/web/setup/).

3.  **Copy you firebase config object.**

    Once you have your config object copy it into the `gatsby-browser.js` file.

4.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd reactfire-auth-starter/
    gatsby develop
    ```

## 🧰 What's in the box?

This starter builds on top of the official [Gatsby default starter](https://github.com/gatsbyjs/gatsby-starter-default). It adds authentication using the firebase service. Firebase is managed using the latest version of the community developed [Reactfire](https://github.com/FirebaseExtended/reactfire) library.

#### Some additional packages used:

- **`firebase`**: the firebase JS SDK
- **`reactfire/@canary`**: used to manage auth state and provide utility hooks for accessing the firebase SDK
- **`@reach/router`**: Used to handle client-side routing

Apart from the [files found](https://github.com/gatsbyjs/gatsby-starter-hello-world/#-whats-inside) inside the default gatsby starter here are a few additions:

1. **`login.js`**: This is a simple form that uses the `useFirebaseApp()` hook to get access to the firebase signIn method within the firebase JS SDK.

2. **`user-hub.js`**: This is a simple page which takes over the routing on the client-side. It ensures the user is authenticated and has permissions to access all it's routes that are defined using the `AuthCheck` component.

## 🤷‍♂️ How does it all work?

This starter uses the Reactfire library to give you access to firebase using the hooks it provides. The Reactfire library needs a context provider to use the hooks, we setup the context provider by wrapping the root element like so:

```javascript
// gatsby-browser.js
const wrapRootElement = ({ element }) => (
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    {element}
  </FirebaseAppProvider>
)
```

Once the context provider is setup the firebase JS SDK can be retrieved via hooks. Authentication is handled using [client-only routing](https://www.gatsbyjs.org/tutorial/authentication-tutorial/#creating-client-only-routes). The nifty [`AuthCheck`](https://github.com/FirebaseExtended/reactfire/blob/master/docs/reference.md#AuthCheck) component, provided by [Reactfire](https://github.com/FirebaseExtended/reactfire), can be used to listen to the sign in state and redirect if the user tries to access a protected page or signs out. The `AuthCheck` component works with custom claims too giving you fine grained control over user roles and permissions.
