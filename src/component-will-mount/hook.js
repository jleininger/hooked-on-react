import React, { useRef } from 'react';

export default function HookWillMount() {
  const willMount = useRef(true);

  if (willMount.current) {
    console.log('hook will mount');
    willMount.current = false;
  }

  return <span>Hook will mount</span>;
}
