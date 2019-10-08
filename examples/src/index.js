import React from "react";
import { render } from "react-dom";
import ComponentWillMount from "./componentWillMount";
import ComponentWillUpdate from "./componentWillUpdate";

render(<ComponentWillUpdate />, document.getElementById("root"));
