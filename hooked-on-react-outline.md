# Hooked on React Outline

## Replacing Lifecycle methods with React Hooks

### Thesis statement

By now, almost everyone has either used or heard about React hooks. Most everyone has seen the new way to create a React app from the ground up using hooks. What often seems to be missing, is what to do when you want to use React's shiny new feature, but also need to support a large codebase of it's old features.

- What's the big idea?

  - Why hooks?
  - Do I haveta?

- React 15 lifecycle methods vs React 16

  - What's been deprecated (basically anything with `will` in the name except `componentWillUnmount`)
  - What's new
  - What's staying for React 17+
  - What's going away for good and when to worry

- Constructor

  - Do you need this? no.
  - Binding methods (you don't need this anymore, if you ever did it)
  - initializing state with hooks (see next)

- this.state > useState

  - differences
  - async?
  - implementation
  - 1 useState vs many

- Brief breakdown on useEffect

  - what it is
  - what it's not
  - what it replaces

- componentWillMount (`UNSAFE`)

  - how do you replace this?
  - Do you need this?

- componentDidMount

  - triggering useEffect once with empty array
  - using useRef to track initial render vs update

- componentWillReceiveProps (`UNSAFE`)

  - Going away in React 17
  - Replacing with a hook

- shouldComponentUpdate

  - Sometimes React says nah to this
  - Using second param in `useEffect` to achieve the same effect

- componentWillUpdate (`UNSAFE`)

  - Going away
  - Replacing with hook

- componentDidUpdate

  - New 3rd param (snapshot)
  - Replacing with hook

- componentWillUnmount
  - Replacing with return function of `useEffect`
- static getDerivedStateFromProps

  - idk how to use this
  - React says it's rare
  - differences between `componentWillReceiveProps`
  - Replace with hooks

- getSnapshotBeforeUpdate

  - idk about this either
  - also rare
  - Replace with hooks

- getDerivedStateFromError

  - How many people actually use this?
  - How to use
  - Replace with hooks

- componentDidCatch

  - This is a cool one
  - Replace with hooks

- forceUpdate

  - Should you ever use this? I have.
  - Replace with hooks

- Default Props

  - default param values

### Notes:

- Interactive lifecycle diagram: http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ (actually kinda dumb)
- https://reactjs.org/docs/react-component.html#componentwillunmount
- https://medium.com/@paulrohan/migrating-react-class-based-component-to-react-hooks-6fb310aed798
- https://medium.com/simars/react-hooks-manage-life-cycle-events-tricks-and-tips-7ed13f52ba12