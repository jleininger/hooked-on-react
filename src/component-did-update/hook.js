import React, { useEffect } from 'react';

export default function HookDidUpdate() {
  const [count, setCount] = useState(0);
  const willMount = useRef(true);
  const lastCount = useRef(count);

  function countUp() {
    lastCount.current = count;
    setCount(count + 1);
  }

  useEffect(() => {
    console.log('componentDidUpdate', lastCount.current, count);
  }, [count]);

  console.log('render HookDidUpdate', count);
  return (
    <HookWillUpdateWithProps
      count={count}
      lastCount={lastCount.current}
      countUp={countUp}
    />
  );
}
