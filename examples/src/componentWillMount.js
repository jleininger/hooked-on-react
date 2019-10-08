import React, { Component, useEffect, useRef } from "react";

class ComponentWillMount extends Component {
  componentWillMount() {
    console.log("component will mount");
  }

  render() {
    return <span>componentWillMount</span>;
  }
}

function HookWillMount() {
  const willMount = useRef(true);

  if (willMount.current) {
    console.log("hook will mount");
  }

  useEffect(() => {
    willMount.current = false;
  }, []);

  console.log(willMount);

  return <span>Hook will mount</span>;
}

export default HookWillMount;
// export default ComponentWillMount;
