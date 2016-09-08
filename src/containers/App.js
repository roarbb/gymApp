import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

const App = (props) => {
  return (
    <div>
      <div id="header">
        <nav className="navbar navbar-full navbar-dark bg-primary clearfix">
          <Link to="/" className="navbar-brand">Crossfit RJ Max</Link>

          {props.user.name &&
            <ul className="nav navbar-nav pull-xs-right">
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  {props.user.name} <img src={props.user.picture.data.url} alt="avatar" className="img-circle header-avatar"/>
                </Link>
              </li>
            </ul>
          }
        </nav>
      </div>

      <div className="container">
        {props.children}
      </div>
    </div>
  )
};

App.propTypes = {};

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)
