import React, { Component } from 'react';

export default class ComponentWillUpdate extends Component {
  state = {
    count: 0,
  };

  countUp = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentWillUpdate(nextProps, nextState) {
    console.log(
      'component will update state',
      this.state.count,
      nextState.count,
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
      'component will update with props',
      this.props.count,
      nextProps.count,
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
