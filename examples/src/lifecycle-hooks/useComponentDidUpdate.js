import React, { useEffect, useLayoutEffect } from 'react';

function useComponentDidUpdate(callback, deps) {
  useEffect(callback, deps);
}

function useComponentDidUpdateWithLayout(callback, deps) {
  useEffect(callback, deps);
}

export default useComponentDidUpdate;
