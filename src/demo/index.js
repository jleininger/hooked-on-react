import React, { Component } from 'react';

export default class Counter extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     count: 0,
  //     userMsg: ''
  //   }
  // }

  state = {
    count: 0,
    userMsg: '',
  };

  countUp = () => {
    this.setState({ count: this.state.count + 1 });
  };

  countDown = () => {
    this.setState({ count: this.state.count - 1 });
  };

  resetCount = e => {
    if (e.keyCode === 32) {
      this.setState({ count: 0 });
    }
  };

  componentWillMount() {
    this.setState({ userMsg: 'Hello There' });
  }

  componentDidCatch(error, info) {
    this.setState({ userMsg: 'Error!: Something broke' });
  }

  componentDidMount() {
    document.addEventListener('keyup', this.resetCount);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== 5 && this.state.count === 5) {
      this.setState({ userMsg: 'Number is 5' });
    } else if (prevState.count === 5 && this.state.count !== 5) {
      this.setState({ userMsg: 'Hello There' });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.resetCount);
  }

  render() {
    return (
      <CounterDisplay
        count={this.state.count}
        countUp={this.countUp}
        countDown={this.countDown}
        userMsg={this.state.userMsg}
      />
    );
  }
}

class CounterDisplay extends Component {
  state = {
    startedCounting: false,
  };

  componentDidUpdate(prevProps) {
    if (!this.state.startedCounting && prevProps.count !== this.props.count) {
      this.setState({
        startedCounting: true,
      });
    }
  }

  render() {
    return (
      <div>
        <h2>World's Worst Counter</h2>
        <h4>{this.props.userMsg}</h4>
        <span>Count: {this.props.count} &nbsp;</span>
        <button onClick={this.props.countUp}>Count Up</button>
        <button
          disabled={!this.state.startedCounting}
          onClick={this.props.countDown}
        >
          Count Down
        </button>
      </div>
    );
  }
}
