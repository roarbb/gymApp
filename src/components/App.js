import React, {PropTypes} from 'react'
import {Link} from 'react-router'

const App = (props) => {
  return (
    <div>
      <ul role="nav">
        <li><Link to="/" activeStyle={{ color: 'red' }}>Dashboard</Link></li>
        <li><Link to="/login" activeStyle={{ color: 'red' }}>Login</Link></li>
      </ul>

      {props.children}
    </div>
  )
};

App.propTypes = {};

export default App;
