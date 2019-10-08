import React from "react";
import { render } from "react-dom";
import ComponentWillMount from "./componentWillMount";
import ComponentWillUpdate from "./componentWillUpdate";
import ComponentWillReceiveProps from "./componentWillReceiveProps";

render(<ComponentWillReceiveProps />, document.getElementById("root"));
