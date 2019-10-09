import React, { useEffect, useRef } from 'react';

//TODO: Rename? Can be used for more than one lifecycle method
export default function useComponentWillMount(callback) {
  const willMount = useRef(true);

  if (willMount.current) {
    callback();
    willMount.current = false;
  }
}
