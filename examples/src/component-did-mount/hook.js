import React, { useEffect, useRef } from 'react';

export default function HookDidMount() {
  useEffect(() => {
    console.log('componentDidMount ');
  }, []); //Empty array forces this to only run once

  return <span>HookDidMount</span>;
}
