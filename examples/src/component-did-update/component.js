import React, { Component } from 'react';

export default class ComponentDidUpdate extends Component {
  state = {
    count: 0,
  };

  countUp = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(
        'component did update state',
        prevState.count,
        this.state.count,
      );
    }
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
