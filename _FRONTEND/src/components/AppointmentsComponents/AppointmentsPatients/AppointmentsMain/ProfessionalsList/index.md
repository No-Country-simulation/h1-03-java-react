## Overview

This is a React functional component named `ProfessionalsList`. It fetches a list of doctors from an API endpoint and displays them in a list. The component uses React hooks to manage state and side effects.

## State Management

The component uses the following state variables:

- `language`: The current language selected by the user.
- `professionalsList`: The list of doctors fetched from the API.
- `hasReachLastOne`: A boolean indicating whether the last page of doctors has been reached.
- `pageNumber`: The current page number for fetching doctors.

## API Fetching

The component fetches the doctors using the `useQuery` hook from the `@tanstack/react-query` library. The `queryKey` is set to `["key-getDoctorsList"]` and the `queryFn` is a function that calls the `getFetch` function with the API endpoint URL and a token.

The `enabled` option is set to `false` to prevent the query from running automatically when the component mounts. Instead, the `refetch` function is called in a `useEffect` hook to manually trigger the query.

## Rendering

The component renders a container with a title and a list of doctors. If there are no doctors, a loading spinner is displayed. Each doctor is displayed with their name and specialty.

The component also includes a `SeeMoreButton` component that allows the user to load more doctors when they reach the end of the current page. The button is disabled when `hasReachLastOne` is `true`.

## Conclusion

This component fetches a list of doctors from an API endpoint and displays them in a list. It uses React hooks to manage state and side effects. The component is exported as the default export of the module.
