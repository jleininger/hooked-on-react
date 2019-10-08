import React, { useEffect, useRef } from "react";
import useComponentWillMount from "./useComponentWillMount";

export default function useComponentWillUpdate(newValue) {
  const willMount = useComponentWillMount();
  const oldValue = useRef(newValue);

  useEffect(() => {
    if (!willMount) {
      oldValue.current = newValue;
    }
  });

  return oldValue.current;
}
