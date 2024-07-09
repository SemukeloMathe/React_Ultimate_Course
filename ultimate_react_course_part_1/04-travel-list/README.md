# Travel List Application

We capture all the necessary items that an individial needs to go on a vacation.
This application introduces some new concepts in React so far in this learning phase.
This project introduces the following topics:

## Controlled Elements

- By default, input elements maintain their own state in the DOM.
- In order to implement controlled elements technique:
- 1. We first create a piece of state.
- 2. We use the state as a value on the element we want to control.
- 3. We update that state variable.

## Whats the difference between State and Props

- State is internal data. Data owned by the component.
- State can be updated by the component itself.
- State is used to make components interactive.
- State is the components memory.
- Updating state causes component to re-render.
- Props is external data. Data owned by the parent component.
- Receiving new props causes component to re-render. Usually when the parent's state has been updated.
- Props are read only.
- Used by parent to configure child component.
