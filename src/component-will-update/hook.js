import React, { useRef, useState } from 'react';
import useComponentWillUpdate from '../lifecycle-hooks/useComponentWillUpdate';

//componentWillUdate logic implemented directly in the component.
export default function HookWillUpdate() {
  const [count, setCount] = useState(0);
  const willMount = useRef(true);
  const lastCount = useRef(count);

  function countUp() {
    lastCount.current = count;
    setCount(count + 1);
  }

  if (!willMount.current) {
    console.log('hook will update state', lastCount.current, count);
  } else {
    willMount.current = false;
  }

  console.log('render parent', count);
  return (
    <HookWillUpdateWithProps
      count={count}
      lastCount={lastCount.current}
      countUp={countUp}
    />
  );
}

//componentWillUpdate using hook
function HookWillUpdateWithProps({ count, countUp }) {
  //This is reversed with how componentWillUpdate works,
  //here count is our "nextProps" value.
  useComponentWillUpdate(lastCount => {
    console.log('child hook will update props', lastCount, count);
  }, count);

  console.log('render child', count);
  return (
    <div>
      <h3>Hook will Update</h3>
      <span>Count: {count} &nbsp;</span>
      <button onClick={countUp}>Count Up</button>
    </div>
  );
}
