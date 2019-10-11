import React, { useEffect, useLayoutEffect, useRef } from 'react';

export default function useComponentDidUpdate(callback, deps) {
  const willMount = useRef(true);
  const oldValue = useRef(deps);

  useEffect(() => {
    if (willMount.current) {
      willMount.current = false;
    } else {
      callback(...oldValue.current);
      oldValue.current = deps;
    }
  }, deps);
}
