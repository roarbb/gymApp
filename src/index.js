import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import Root from './containers/Root'

import './styles/elemental.min.css'
import './styles/main.css'

render(
  <Root />,
  document.getElementById('root')
);
