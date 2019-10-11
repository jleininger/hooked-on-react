import React, { memo, useState } from 'react';

export function ShouldComponentUpdate() {
  const [count, setCount] = useState(0);

  return <span>ShouldComponentUpdate</span>;
}

//memo only works for props
export default memo(ShouldComponentUpdate);
