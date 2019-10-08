import React, { Component, useEffect, useRef, useState } from "react";
import useComponentWillMount from "./hooks/useComponentWillMount";
import useComponentWillUpdate from "./hooks/useComponentWillUpdate";

//TODO: Simplify, make easier to break down/read
class ComponentWillUpdate extends Component {
  state = {
    count: 0
  };

  countUp = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "component will update state",
      this.state.count,
      nextState.count
    );
  }

  render() {
    return (
      <ComponentWillUpdateWithProps
        count={this.state.count}
        countUp={this.countUp}
      />
    );
  }
}

class ComponentWillUpdateWithProps extends Component {
  componentWillUpdate(nextProps) {
    console.log(
      "component will update with props",
      this.props.count,
      nextProps.count
    );
  }

  render() {
    return (
      <div>
        <h3>componentWillUpdate</h3>
        <span>Count: {this.props.count} &nbsp;</span>
        <button onClick={this.props.countUp}>Count Up</button>
      </div>
    );
  }
}

//----------HOOK EXAMPLE----------

//TODO: Different files?
function HookWillUpdate() {
  const [count, setCount] = useState(0);
  const willMount = useComponentWillMount();
  const lastCount = useRef(count);

  function countUp() {
    lastCount.current = count;
    setCount(count + 1);
  }

  if (!willMount) {
    console.log("hook will update", lastCount.current, count);
  }

  return (
    <HookWillUpdateWithProps
      count={count}
      lastCount={lastCount.current}
      countUp={countUp}
    />
  );
}

//TODO: Find use case for needing a componentWillUpdate
function HookWillUpdateWithProps({ count, countUp }) {
  const willMount = useComponentWillMount();
  const lastCountProp = useComponentWillUpdate(count);

  //TODO: Anyway around this?
  if (!willMount) {
    console.log("hook will update with props", lastCountProp, count);
  }

  return (
    <div>
      <h3>Hook will Update</h3>
      <span>Count: {count} &nbsp;</span>
      <button onClick={countUp}>Count Up</button>
    </div>
  );
}

// export default ComponentWillUpdate;
export default HookWillUpdate;
