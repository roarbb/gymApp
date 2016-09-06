import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import Root from './containers/Root'

require('./styles/elemental.less');
require('./styles/main.scss');

render(
  <Root />,
  document.getElementById('root')
);
