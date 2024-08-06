Sure! Here's a more structured and organized version of the code snippet, divided into sections with clear headings and spacing between them:

### Imports

- The code snippet imports the `useNavigate` and `useState` hooks from the React Router and React libraries, respectively.
- It also imports the `useEffect` hook from the React library.

### Component Definition

- The code snippet defines a React functional component called `BottomMenu`.

### State Variable

- Inside the component, it initializes a state variable called `bottomValue` using the `useState` hook.
- The initial value of `bottomValue` is set to `'0px'`.

### Previous Scroll Position

- The code snippet declares a variable called `prevScrollPos2` and assigns it the value of `window.scrollY`.

### Function Definitions

- The code snippet defines two functions: `hideBottomMenuOnScroll` and `hideBottomMenuOnWhell`.

#### hideBottomMenuOnScroll

- The `hideBottomMenuOnScroll` function compares the current scroll position (`window.scrollY`) with the previous scroll position (`prevScrollPos2`).
- If the current scroll position is greater than the previous scroll position, it sets the `bottomValue` state variable to `'-80px'`.
- Otherwise, it sets the `bottomValue` state variable to `'0px'`.
- It then updates the `prevScrollPos2` variable with the current scroll position.

#### hideBottomMenuOnWhell

- The `hideBottomMenuOnWhell` function takes a `delta` parameter, which represents the amount of scroll.
- If the `delta` is greater than 0, it sets the `bottomValue` state variable to `'-80px'`.
- Otherwise, it sets the `bottomValue` state variable to `'0px'`.

### Event Listeners

- The component uses the `useEffect` hook to add event listeners for the `scroll` and `wheel` events.
- When the `scroll` event is triggered, it calls the `hideBottomMenuOnScroll` function.
- When the `wheel` event is triggered, it calls the `hideBottomMenuOnWhell` function with the `deltaY` value of the event.

### Component Render

- The code snippet returns a `<nav>` element with a class name of `"bottomMenu"`.
- The `style` attribute of the `<nav>` element is set to an object with a `bottom` property, which is set to the value of the `bottomValue` state variable.
- Inside the `<nav>` element, there are five `<div>` elements, each representing an option.

Overall, this code snippet creates a bottom menu component that hides and shows based on the user's scroll and wheel events.
