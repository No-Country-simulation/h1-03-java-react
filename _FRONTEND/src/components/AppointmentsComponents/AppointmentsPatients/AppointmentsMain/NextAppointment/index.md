**Overview**

This is a React functional component called `NextAppointment`. It is designed to display the current user's most recent appointment details.

**Functionality**

The component retrieves the current user's most recent appointment data from an API endpoint using the `useQuery` hook. If the data is not available, it displays a loading spinner. Otherwise, it renders the appointment details such as the doctor's name, specialty, clinic, and date and time.

**Data Retrieval**

The component uses the `useQuery` hook to fetch the appointment data from an API endpoint. The `useQuery` hook is enabled only when the component mounts, and it retrieves the data from the API endpoint.

**Data Formatting**

The component uses a function called `getFormatterDate` to format the appointment date and time. This function takes the raw date and time data as input and returns a formatted string that can be displayed on the screen.

**Language Support**

The component uses the `useSelector` hook to get the current language from the Redux store. This allows the component to display the appointment details in the user's preferred language.

**User Interface**

The component renders the appointment details in a user-friendly format, including the doctor's name, specialty, clinic, and date and time. It also includes an image of a clock and a bell.

**Loading State**

If the appointment data is not available, the component displays a loading spinner to indicate that the data is being fetched.