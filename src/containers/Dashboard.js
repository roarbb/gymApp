import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {fetchMax} from '../actions'
import MaxList from '../components/MaxList'
import {Row, Col, Spinner, Card, Glyph} from 'elemental'
import AddMaxButton from '../components/AddMaxButton'

class Dashboard extends Component {
  componentDidMount() {
    const {dispatch, userHash, max} = this.props

    if(max.length < 2) {
      dispatch(fetchMax(userHash))
    }
  }

  render() {
    const {loading, max} = this.props;

    return (
      <div>
        {loading && max.length === 0 &&
          <Row>
            <Col className="text-xs-center">
              <Spinner size="lg" type="primary" />
            </Col>
          </Row>
        }

        {!loading && max.length === 0 &&
          <Card className="clearfix text-xs-center">
            <Glyph icon="tag" type="muted" /> Your Dashboard is empty ...
            <br />
            <br />
            <AddMaxButton />
          </Card>
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
