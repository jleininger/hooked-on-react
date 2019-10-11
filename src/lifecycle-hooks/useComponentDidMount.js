import React, { useEffect, useLayoutEffect } from 'react';

//Use this instead
function useComponentDidMount(callback) {
  useEffect(callback, []);
}

//Use this if you want a 1:1 replacement for componentDidMount
function useComponentDidMountWithLayout(callback) {
  useLayoutEffect(callback, []);
}

export default useComponentDidMount;
