# Travel List Application

In this application we capture all the necessary items that an individual needs to go on a vacation. This application introduces some new concepts in React so far in this learning phase. This project introduces the following topics:

## Controlled Elements

- By default, input elements maintain their own state in the DOM.
- In order to implement controlled elements technique:
- 1. We first create a piece of state.
- 2. We use the state as a value on the element we want to control.
- 3. We update that state variable.

## Whats the difference between State and Props

##### State


- State is internal data. Data owned by the component.
- State can be updated by the component itself.
- State is used to make components interactive.
- State is the components memory.
- Updating state causes a component to re-render.

##### Props

- Props is external data. Data owned by the parent component.
- Receiving new props causes a component to re-render. Usually when the parent's state has been updated.
- Props are read only.
- Used by parent to configure child component.

## Thinking In React

#### What does thinking in React actually mean?

- It means you have a very good mental model of how and when to to use all the react tools like:
- 1. Components
- 2. State
- 3. Data Flow
- 4. Effects, etc.
- It is thinking about state transitions, not element mutations.

### Thinking in React As A Process

1. Break the desired UI into components and esatblish a component tree.
2. Build a static version in React (without state)
3. Think about state:

- 1. we decide when to use state.
- 2. what type of state we need (local vs global).
- 3. Where to place each piece of state.

4. Establish the data flow:

- 1. One-way data flow.
- 2. Child to parent communication.
- 3. Accessing global state.

_Step 3 and 4 is what we call State Management._

When you know how to Think In React, you will be able to answer:

1. How to break up a UI design into components?
2. How to make some components reusable?
3. How to assemble UI from reusable components?
4. What pieces of state do I need for interactivity?
5. Where to place state? (What component should "own" each piece of state?)
6. WHat type of state can or should I use?
7. How to make data flow through an app?

## Fundamentals of State Management in React

State Manament: Deciding _when_ to create pieces of state, what _types_ of state are necessary, _where_ to place each piece of state, and how data _flows_ through the app.

### Global State:

- State that many components might need.
- Shared state that is accessible to every component in the entire application
- Declared using the useContext Hook.

### Local State:

- State needed only by one or few components.
- State that is defined in a component and only that component and child components have access to it (by passing via props)
- Declared using the useState Hook.

## Derived State

- State that is computed from an existing piece of state or from props.

## Key Notes

- In react each piece of state is either local or global.
- Always start with local state and only move to global when ypu truly need it.
