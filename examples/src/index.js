import React from 'react';
import { render } from 'react-dom';
import ComponentWillMount from './component-will-mount/component';
import ComponentWillUpdate from './component-will-update/component';
import ComponentWillReceiveProps from './component-will-receive-props/componentWillReceiveProps';

// render(<ComponentWillMount />, document.getElementById('root'));
render(<ComponentWillUpdate />, document.getElementById('root'));
// render(<ComponentWillReceiveProps />, document.getElementById('root'));
