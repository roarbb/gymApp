import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {fetchMax} from '../actions'
import MaxList from '../components/MaxList'

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const {dispatch, userHash} = this.props

    dispatch(fetchMax(userHash))
  }

  render() {
    const {loading, max} = this.props;

    return (
      <div>
        {loading && max.length === 0 &&
          <h2>Loading...</h2>
        }

        {!loading && max.length === 0 &&
          <h2>Empty.</h2>
        }

        {max.length > 0 &&
          <div style={{ opacity: loading ? 0.5 : 1 }}>
            <MaxList max={max}/>
          </div>
        }
      </div>
    )
  }
}

Dashboard.propTypes = {
  max: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    userHash: state.user.hash,
    loading: state.max.loading,
    max: state.max.items
  }
}

export default connect(mapStateToProps)(Dashboard)
