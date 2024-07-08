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

_NB_\* _State is tool. Mastering state will unlock the power of React development._
