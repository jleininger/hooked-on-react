import React, { Component, useState } from 'react';
import useComponentWillUpdate from '../lifecycle-hooks/useComponentWillUpdate';
import useComponentWillMount from '../lifecycle-hooks/useComponentWillMount';

class ComponentWillReceiveProps extends Component {
  state = {
    count: 0,
  };

  countUp = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <ComponentWillReceivePropsChild
        count={this.state.count}
        countUp={this.countUp}
      />
    );
  }
}

class ComponentWillReceivePropsChild extends Component {
  state = {
    countIsFive: false,
  };

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', this.props.count, nextProps.count);
    if (!this.state.countIsFive && nextProps.count === 5) {
      this.setState({ countIsFive: true });
    } else if (this.state.countIsFive) {
      this.setState({ countIsFive: false });
    }
  }

  render() {
    console.log('render', this.props.count, this.state.countIsFive);
    return (
      <div>
        <h3>ComponentWillReceiveProps</h3>
        <span>Count: {this.props.count} &nbsp;</span>
        <button onClick={this.props.countUp}>Count Up</button>
      </div>
    );
  }
}

function HookWillReceiveProps() {
  const [count, setCount] = useState(0);

  function countUp() {
    setCount(count + 1);
  }

  return <HookWillReceivePropsChild count={count} countUp={countUp} />;
}

function HookWillReceivePropsChild({ count, countUp }) {
  const [countIsFive, setCountIsFive] = useState(false);
  const willMount = useComponentWillMount();
  const lastCountProp = useComponentWillUpdate(count);

  if (!willMount) {
    console.log('hook will receive props', lastCountProp, count);
    if (!countIsFive && count === 5) {
      setCountIsFive(true);
    } else if (countIsFive) {
      setCountIsFive(false);
    }
  }

  console.log('render', count);
  return (
    <div>
      <h3>Hook will receive props</h3>
      <span>Count: {count} &nbsp;</span>
      <button onClick={countUp}>Count Up</button>
    </div>
  );
}

// export default ComponentWillReceiveProps;
export default HookWillReceiveProps;
