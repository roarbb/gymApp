import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import PercentilList from '../components/PercentilList'
import {Row, Col, Card, Button, Glyph} from 'elemental'

class DetailContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const {max} = this.props

    this.activeItem = max.find(item => {
      return item.id == this.props.params.maxId
    })
  }

  render() {
    const max = this.activeItem.max
    const trainingMax = max*0.9

    return (
      <div id="detail-container">
        <Row className="flex-horizontal-center">
          <Col sm="7/20" className="max-title">{this.activeItem.discipline}</Col>
          <Col sm="5/20">
            <span className="text-success"><strong>Personal best</strong> {max}kg</span>
          </Col>
          <Col sm="5/20">
            <span className="text-danger"><strong>Training max</strong> {trainingMax}kg</span>
          </Col>
          <Col sm="3/20" className="text-xs-right"><Button type="hollow-primary"><Glyph icon='pencil' type='primary' /> Edit</Button></Col>
        </Row>
        <hr />
        <PercentilList max={max} trainingMax={trainingMax} />
      </div>
    )
  }
}

DetailContainer.propTypes = {

};

function mapStateToProps(state) {
  return {
    max: state.max.items
  }
}

export default connect(mapStateToProps)(DetailContainer)
