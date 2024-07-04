# Pizza Menu App

This project touches on the the following React Concepts:

## 1. Components

- React applications are entirely made out of components.
- They are the building blocks of User Interfaces in React.
- It is a piece of UI that has it's own data, logic, and appearance.
- We build complex UIs by building multiple component and combining them.
- Components can be reused, nested inside each other, and pass data between them.
- A component tree shows the hierachy that exists to show the components used.
- When creating new components in react, we are obliged to use the following criteria:
- 1. The component must be a function that starts with an uppercase letter.
- 2. The function needs to return some mark up, usually in jsx but you can also return null.
- 3. Each component needs to return one element.
- 4. Never function component declarations, but always declare all your components in the top level.
- 5. Use _fragments_ to render multiple components on the same element.

## 2. Props

- Props are simply how we pass in data between components, particularly parent components to child components.
- Essential react tool to configure and customize components (like function params).
- With props, parent components control how child components look and work.
- Anything can be passed as props: single values, arrays objects, functions, even other components.
- Props are read only and immutable.
- If you need to mutate props, you actually need state.
- Mutating props would affect parent, creating side effects.

## 3. JSX

- A _declarative syntax_ to describe what components look like and how they work.
- Components must return a block of JSX.
- It is also an extension of JavaScript that allows us to _embed_ _JavaScript_, _CSS_, and _React components_ into _HTML_.
- Each JSX element is converted to a _React.createElement_ function call.
- We could use React without _JSX_.
- JSX combines JavaScript, CSS, and HTML into one single block.

## 4. Re-using components

## 5. Rendering Lists

## 6. Conditional Rendering

## 7. Styling in React

We can choose many different options to style react components, we can use:

1. Inline styling,

- All CSS property names are converted to Camel-Case in JSX.
- In JSX we need to define inline styles using a JavaScript object
- To write JavaScript we need to enter JS mode.
- Easiest way to add styling to react components.

2. External CSS
3. SCSS
4. Modules
5. Tailwind CSS

## Key Notes

- React is an _abstraction_ away from the DOM, _We never touch the DOM_.
- React renders a component based on its current _data_ and the _UI_ will always be _kept in_ _sync_ based on that _data_.
- This data that React uses is made up of _Props and State_.
- _State_ is _internal component data_ that can be updated by the _component's_ logic.
- _Props_ is _external compoenent data_(coming from the outside) and can only be updated by the _parent component_ and cannot be modified by the child component.
- Components have to be pure functions in termsof props and state.
- This allows react to optimize apps, avoid bugs, make apps predictable.
- React uses a one way data flow, meaning props can only be passed down the component tree and not up the component tree(from parent component to child component, and not from child component to parent component).
  This makes applications more predictable and easier to understand and also makes applications easier to debug, as we have more control over the data and lastly boosts perfomance.
