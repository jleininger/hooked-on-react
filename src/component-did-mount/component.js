import React, { Component } from "react";

export default class ComponentDidMount extends Component {
  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    return <span>ComponentDidMount</span>;
  }
}
