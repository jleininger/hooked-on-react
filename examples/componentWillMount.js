import React, { Component, useRef } from "react";

class ComponentWillMount extends Component {
  componentWillMount() {
    console.log("component will mount");
  }
}

function HookWillMount() {
  const willMount = useRef(true);

  if (willMount.current) {
    console.log("hook will mount");
  }
}



export default HookWillMount;
// export default ComponentWillMount
