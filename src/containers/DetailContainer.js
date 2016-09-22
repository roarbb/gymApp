import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import PercentilList from '../components/PercentilList'
import {Row, Col, Glyph, Spinner, Alert} from 'elemental'
import {fetchMax} from '../actions'
import EditMaxButton from '../components/EditMaxButton'

class DetailContainer extends Component {
  componentDidMount() {
    const {dispatch, userHash, max} = this.props;

    if(max.length === 0) {
      dispatch(fetchMax(userHash))
    }
  }

  render() {
    const {max, loading} = this.props
    let trainingMax = 0

    const activeItem = max.find(item => {
      return parseInt(item.id, 10) === parseInt(this.props.params.maxId, 10)
    })

    if(activeItem) {
      trainingMax = activeItem.max*0.9
    }

    return (
      <div id="detail-container">

        {!loading && activeItem &&
          <div>
            <Row className="flex-horizontal-center">
              <Col sm="7/20" className="max-title">{activeItem.discipline}</Col>
              <Col sm="5/20">
                <span className="text-success"><strong>Personal best</strong> {activeItem.max}kg</span>
              </Col>
              <Col sm="5/20">
                <span className="text-danger"><strong>Training max</strong> {trainingMax.toFixed(2)}kg</span>
              </Col>
              <Col sm="3/20" className="text-xs-right">
                <EditMaxButton maxId={activeItem.id} />
              </Col>
            </Row>
            <hr />
            <PercentilList trainingMax={trainingMax} />
          </div>
        }

        {!loading && !activeItem &&
          <Row>
            <Col className="text-xs-center">
              <Alert type="danger">
                <Glyph icon="alert" type="danger" /> We have not found anything. Sorry.
              </Alert>
            </Col>
          </Row>
        }

        {loading &&
          <Row>
            <Col className="text-xs-center">
              <Spinner size="lg" type="primary" />
            </Col>
          </Row>
        }

      </div>
    )
  }
}

DetailContainer.propTypes = {
  max: PropTypes.array.isRequired,
  userHash: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    max: state.max.items,
    userHash: state.user.hash,
    loading: state.max.loading
  }
}

export default connect(mapStateToProps)(DetailContainer)
