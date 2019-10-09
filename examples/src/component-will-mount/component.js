import React, { Component } from 'react';

export default class ComponentWillMount extends Component {
  componentWillMount() {
    console.log('component will mount');
  }

  render() {
    return <span>componentWillMount</span>;
  }
}
