# Steps App

This project is a simple introduction on how we use _State_ in react.

## Handling events in React

- We directly listen on the element the event will happen on.
- It's really important to specify a function.
- We want to define a callback function that will be executed when the awaited event occurs, for example a mouse click event.

## What is State?

- Data that a component _can hold over time_.
- It is basically a _Component's memory_.
- _State variable_ / _piece of State_ : A single variable in a component.
- _State_ is more of a general term, it is more about the entire condition at a certain point in time of a component.
- _Updating component state_ triggerss React to _re-render the component_.
- State is how React keeps the UI in sync with the data.

State allows Developers to:

1. Update the component's view(by re-rendering it).
2. Persist local variables between renders.

The _useState_ function is a react hook. We can only call hooks on top level functions.
We should only update State using the setter functions.
Always treat state as immutable.

## The mechanics of State in React

- We don't do direct DOM manipulations, this is because REACT is declarative.
- React updates a view by re-rendering the component.
- By re-rendering we mean React calls the component function again.
- We can imagine React removing the entire view and replacing it with a new one each time a re-render happens.
- React preserves the component state each time a component re-renders. The state is not reset unless the component disappears from the UI library entirely which is what we call unmounting.
- It is when state is updated that a component is automatically re-rendered.
- Whenever we want to update a component view React, we update it's State and React will react to that.
- It's important to know that each component has and manages its own state, no matter how many times we render the same component on different broswer tabs or browsers.
- State is isolated from each component.

For data that should not trigger componnet re-renders, don't use state. JUst use regular variables instead.

- _React reacts to state changes by Re-Rendering the UI_ -_NB_\* _State is tool. Mastering state will unlock the power of React development._
