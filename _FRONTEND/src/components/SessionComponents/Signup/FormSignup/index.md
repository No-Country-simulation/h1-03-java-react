**Overview**

This is a React functional component named `FormSignup`. It is a form for user signup. The component takes several props and uses various React hooks to manage state and side effects.

**Props**

The component accepts the following props:

* `roleSelection`
* `userData`
* `showAlreadyHaveAccount`
* `showFormTitle`

**State Management**

The component uses the `useState` hook to manage several state variables, including:

* `password`
* `repeatPassword`
* `passwordsMatch`
* `entriesData`
* `userDataState`

**Server Communication**

The component uses the `useQuery` hook from the `react-query` library to make asynchronous requests to the server. It defines two queries:

* `querySignupPost`
* `querySignupPut`

These queries use the `postFetch` and `putFetch` functions to send HTTP requests to the server.

**Event Handling**

The component defines several event handlers, including:

* `handleSignupSubmit`: handles form submission
* `handlePassword`: handles password input
* `handleRepeatPassword`: handles repeat password input

**Rendering**

The component renders a form with various input fields and a submit button. It also conditionally renders a message if the passwords do not match.

**Functionality**

The component handles user signup functionality, including form submission, password validation, and server communication.