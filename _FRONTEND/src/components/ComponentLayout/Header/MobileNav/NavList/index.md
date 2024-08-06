Sure! Here's a detailed breakdown of the code snippet in a structured and organized manner:

## Overview
The code snippet defines a React functional component called `NavList`. This component is responsible for rendering a navigation list with language selection options.

## Import Statements
The code imports the necessary dependencies and components:
- `useDispatch` and `useSelector` from the `react-redux` library, used for accessing and updating state in a Redux store.
- `useRef` from the React library, used for creating a mutable reference.
- The `getItemsNav` function, which is used to generate the navigation items based on the selected language and role.
- The `LanguageSelect` component, which renders a language selection dropdown.

## State and Props
The component uses the `useSelector` hook to extract the following state values from the Redux store:
- `headerHeight`: the height of the header.
- `isActiveHamburgerButton`: a boolean indicating whether the hamburger button is active.
- `language`: the selected language.
- `role`: the user's role.

## Event Handlers
The component defines a `handleSelectLanguage` function that dispatches an action to set the selected language using the `setI18n` function.

## Effect Hook
The component uses the `useEffect` hook to add or remove the scroll event listener based on the value of `isActiveHamburgerButton`.

## Rendering
The component renders a section with a class name of "nav-list-container" and a style that depends on the value of `isActiveHamburgerButton`. It also adds an event listener to the document's scroll event if `isActiveHamburgerButton` is true, and removes the event listener if `isActiveHamburgerButton` is false.

Inside the section, it renders a navigation list with a class name of "nav-list" and a style that depends on the value of `isActiveHamburgerButton`. It also renders the `ItemsNav` component and the `LanguageSelect` component.

The component also defines a `handleSelectLanguage` function that dispatches an action to set the selected language using the `setI18n` function.

Overall, this component is responsible for rendering a navigation list with language selection options, and handling the logic for showing and hiding the list based on the value of `isActiveHamburgerButton`.
