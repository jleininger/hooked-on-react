import React, { useEffect, useRef } from 'react';

const noop = () => {};

//What about objects?
//Multiple values
export default function useComponentWillUpdate(callback = noop, newValue) {
  const willMount = useRef(true);
  const oldValue = useRef(newValue);

  useEffect(() => {
    if (!willMount.current) {
      oldValue.current = newValue;
    }
  });

  if (willMount.current) {
    willMount.current = false;
  } else {
    callback(oldValue.current);
  }
}
