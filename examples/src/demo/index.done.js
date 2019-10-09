import React, { useEffect, useState, useRef } from 'react';
import useComponentWillMount from '../lifecycle-hooks/useComponentWillMount';
import useComponentDidUpdate from '../lifecycle-hooks/useComponentDidUpdate';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [userMsg, setUserMsg] = useState('');
  const initialMount = useRef(true);

  function countUp() {
    setCount(count + 1);
  }

  function countDown() {
    setCount(count - 1);
  }

  function resetCount(e) {
    if ((e.keyCode = 32)) {
    }
  }

  //should be did mount
  //   useComponentWillMount(() => {
  //     setUserMsg('Hello There');
  //   });

  useEffect(() => {
    if (initialMount.current) {
      setUserMsg('Hello There');
      initialMount.current = false;
    } else if (count === 5) {
      console.log('set message');
      setUserMsg('Number is 5');
    }
  });

  //Keep logic together
  useEffect(() => {
    document.addEventListener('keyup', resetCount);

    return () => {
      document.removeEventListener('keyup', resetCount);
    };
  }, []);

  return (
    <CounterDisplay
      count={count}
      userMsg={userMsg}
      countUp={countUp}
      countDown={countDown}
    />
  );
}

const CounterDisplay = React.memo(function CounterDisplay({
  count,
  userMsg,
  countUp,
  countDown,
}) {
  const [startedCounting, setStartedCounting] = useState(false);
  const initialMount = useRef(true);

  useEffect(() => {
    if (initialMount.current) {
      initialMount.current = false;
    } else if (!startedCounting) {
      setStartedCounting(true);
    }
  }, [count]);

  //   useComponentDidUpdate(
  //     prevProps => {
  //       console.log('did update', prevProps);
  //     },
  //     [count],
  //   );

  return (
    <div>
      <h2>World's Second Worst Counter</h2>
      <h4>{userMsg}</h4>
      <span>Count: {count} &nbsp;</span>
      <button onClick={countUp}>Count Up</button>
      <button disabled={!startedCounting} onClick={countDown}>
        Count Down
      </button>
    </div>
  );
});
