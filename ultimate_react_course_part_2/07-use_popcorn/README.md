# Use Popcorn App

UsePopcorn is an application all about movies. This application is going to be all about hooks in this project. We can search for movies, We can rate the movie, and add the movie to our watchlist and more features. This application is an introduction to _thinking in react components_.

## Thinking In React: Components, Composition, and Reusability.

When it comes to components, an important question that we need to ask ourselves is: _How do I split a UI into components? And when should I create new components?_

## How to split a ui into components

The way in which we can start answering this question is:

- looking at the component size.
- We classify components based on size.
- We place each component on a scale from small to large, in which none of these extremes are ideal.
- The cons of large components are:
- i. Too many responsibilities.
- ii. Might need too many props.
- iii. Hard to re-use
- iv - Complex code makes it hard to understand.
- The cons of Small components are:
- i. We end up with 100s of mini-components.
- ii. Results in a confusing code base.
- iii. Too abstracted.
- Generally, the goal is to find the right balance between too specific and too broad.

## The criteria for splitting a UI into components:

### 1. Logical Separation of Content/Layout.

- Does the component contain pieces of content or layout that _don't belong together_?
- _You might need a new component._

### 2. Reusability

- Is it possible to reuse part of the component?
- Do you _want_ or _need_ to reuse it?
- _You might need a new component._

### 3. Responsibilities / Complexity

- Is the component doing too _many different things_?
- Does the component rely on too _many props_?
- Does the component have too _many pieces of state_ and/or effects?
- Is the code, including JSX, too _complex/confusing_?
- _You might need a new component_.

### 4. Personal Coding Style.

- Do you prefer smaller functions or components?
- _You might need a new component_.

# Component Categories

Most of your components will _naturally_ fall into _one of three categories_:

### 1. Stateless / Presentational Components

- They don't have any state.
- They are components that can receive some props and then simply present that data or some other content.
- They are mostly small components.

### 2. Stateful Components

- They have state.
- They can be usable

### 3. Structural Components

- These are the pages, layouts or screens of the application.
- Results from composing alot of components together.
- Thy can be large and non-reusable.
- They provide some sort of structure to applications.

# Key Notes

- Thinking In React is all about State, Data Flow and Components.
- When in Doubt, start with a relatively large component, then split it into smaller components as it becomes necessary.
- You don't need to focus on reusability and complexity early on.
- In the end these are all _guidelines_. It will become intuitive over time.

---

- Be aware that creating a new component _creates a new abstraction. Abstractions have a \_cost_, because _more abstractions require more mental energy_ to switch back and forth between components. So try not to create new components too early.
- Its importatnt to name a component according to _what it does_ or _what it displays_. Don't be afraid of using long component names.
- Never declare a new component _inside another component!_
- _Co-locate related components inside the same file_. Don't separate components into different files too early.
- It's completely normal that an app has components of _many different sizes_, including very small and huge ones.
- _Some very small components are necessary!_, they are highly re-usable and have very low complexity.
- _Most apps will have a few huge components_ that are not meant to be re-used. In situations like this, don't worry about reusablity.
- As components get larger they become less re-usable.

---
