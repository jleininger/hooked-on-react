import React, { useEffect, useRef } from "react";

//TODO: Rename? Can be used for more than one lifecycle method
export default function useComponentWillMount() {
  const willMount = useRef(true);

  //TODO: useLayoutEffect?
  useEffect(() => {
    willMount.current = false;
  }, []);

  return willMount.current;
}
