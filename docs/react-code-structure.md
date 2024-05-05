> ref: https://peacockindia.mintlify.app/docs/react-code-structure

Organizing code within React components in a logical and efficient manner is crucial for readability and maintainability. This guide outlines the recommended order and structure for various elements within a React component.

## Recommended Structure Inside React Components

1. **Variables and Constants**: Declare any constants or variables at the beginning of the component.

```jsx
const LIMIT = 10;
```

2. **State Management & other hooks (Redux, Context)**: Initialize Redux hooks or Context API hooks next.

```jsx
const user = useSelector(state => state.user);
```

3. **Local State (useState, useReducer)**: Define local state hooks after state management hooks.

```jsx
const [count, setCount] = useState(0);
```

4. **Effects (useEffect)**: Place `useEffect` hooks after state declarations to capture component lifecycle events.

```jsx
useEffect(() => {
  loadData();
}, [dependency]);
```

5. **Event Handlers and Functions**: Define event handlers and other functions after hooks.

```jsx
const handleIncrement = () => {
  setCount(prevCount => prevCount + 1);
};
```

### Example of good structure ✅

```jsx
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import SomeService from './SomeService';
import './Page.css';

const Page = ({ variant, ...props }) => {
  // Constants
  const MAX_COUNT = 10;

  // Redux State
  const user = useSelector(state => state.user);

  // Local State
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  // useEffect for loading data
  useEffect(() => {
    SomeService.getData().then(data => setData(data));
  }, []);

  // useEffect for user-related operations
  useEffect(() => {
    if (user) {
      console.log('User updated:', user);
    }
  }, [user]);

  // Event Handlers
  const handleIncrement = () => {
    if (count < MAX_COUNT) {
      setCount(prevCount => prevCount + 1);
    }
  };

  return (
    <div className={`page page-${variant}`}>
      <h1>Welcome, {user.name}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <p>Count: {count}</p>
      {data && <div>Data loaded!</div>}
    </div>
  );
};

export default Page;
```

In this example, the structure of the React component follows a logical order:

1. **Imports**: Grouped at the top, starting with React-related imports, followed by Redux hooks, services, and styles.
2. **Component Function**: The functional component `Page` starts with constants, followed by state management using Redux, local state with `useState`, lifecycle methods with `useEffect`, and event handler functions.
3. **Return Statement**: The JSX returned by the component is clearly structured at the end.

This organization makes the code more readable and maintainable, especially as components grow in complexity.

## Bad Practices to Avoid

- **Mixing Hook Types**: Avoid interleaving useState, useEffect, and custom hooks randomly. This can lead to confusion and makes the code less predictable.
- **Declaring Functions or Variables in the Middle of Hooks**: Inserting function or variable declarations amidst hook calls disrupts the flow and readability.
- **Multiple useEffect Calls with Similar Dependencies**: Consolidate effects with similar dependencies to avoid unnecessary re-renders and side effects.

### Example of Poor Structure 📛

```jsx
const [name, setName] = useState('');
const handleNameChange = e => setName(e.target.value);

const [age, setAge] = useState(0);
// ... other code ...

useEffect(() => {
  validateName(name);
}, [name]);

const LIMIT = 5;
// ... other code ...

useEffect(() => {
  // Another effect with the same dependency
}, [name]);
```

This example demonstrates inefficient organization with useState and useEffect hooks scattered throughout the component, making it hard to track the component's logic and lifecycle.

---

## Flexible Structure with Custom Hooks

While a standard order for hooks and variables is typically recommended, certain scenarios, particularly involving custom hooks, may require a more adaptable approach.

<Note>Balancing Structure with Practical Needs</Note>

In real-world development, the ideal order of hooks might be adjusted to suit specific functional requirements or dependencies. This is especially true with custom hooks that depend on state or other hooks.

#### Example: Adjusting Order for Custom Hooks and useState 💡

Consider a scenario where a custom hook's output is used as a dependency in another hook or a piece of state. Here, the order of `useState` and the custom hook may be interchanged for functional necessity.

```jsx
import React, { useState } from 'react';
import useGetAllMenuItems from './useGetAllMenuItems';
import useUUID from './useUUID';

const MenuComponent = ({ restaurant_id, tbl_id, limit }) => {
    // Custom hook that needs to precede certain state hooks
    const uuid = useUUID();

    // useState hooks, some of which depend on the custom hook's output
    const [searchQuery, setSearchQuery] = useState('');
    const [sortby, setSortby] = useState('rating');
    const [category, setCategory] = useState('');

    // Another custom hook that uses state and the output from useUUID
    const { data: menuItems, error } = useGetAllMenuItems(
        restaurant_id,
        uuid,
        tbl_id,
        limit,
        searchQuery,
        sortby,
        category,
    );

    // Component logic and JSX
    return (
        // JSX rendering using menuItems
    );
};

export default MenuComponent;
```

In this example, `useUUID` is called before certain `useState` hooks because its output is required by `useGetAllMenuItems`. This demonstrates the need for flexibility in structuring components.

<Info>Note: This is just one of the example with API hooks & useState. Based on your case it maybe change.</Info>

This section emphasizes the importance of adaptability in structuring React components, especially when using custom hooks that have dependencies on other state or hooks. It serves as a practical extension to the initial guide, acknowledging the nuances of real-world React development.

### Example ready to copy and paste

```jsx
// Constants
const MAX_COUNT = 10;

// Redux State
const user = useSelector(state => state.user);

// Local State
const [count, setCount] = useState(0);
const [data, setData] = useState(null);

// useEffect for loading data
useEffect(() => {}, []);

// useEffect for user-related operations
useEffect(() => {}, []);

// Event Handlers
const handleIncrement = () => {};

// ** Props
// ** Constants
// ** Redux State
// ** Local State
// ** useEffect for loading data
// ** Custom hooks
// ** Event Handlers
```

## Conclusion

A well-structured React component enhances the developer's ability to understand and maintain the code. Following these guidelines ensures that your components are organized logically, which is especially crucial in larger applications where the complexity can escalate quickly. Remember, consistency in code structure not only benefits you but also your teammates who work on the codebase.
