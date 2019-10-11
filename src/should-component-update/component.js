import React, { Component, PureComponent } from 'react';

export class ShouldComponentUpdate extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    console.log('component render');
    return <span>ShouldComponentUpdate</span>;
  }
}

//PureComponent performs an automatic shallow comparison of state and props
export class PureComponentShouldUpdate extends PureComponent {
  render() {
    console.log('component render');
    return <span>PureComponentShouldUpdate</span>;
  }
}

export default ShouldComponentUpdate;
