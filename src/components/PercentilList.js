import React from 'react'
import {Row, Col, Card} from 'elemental'

const PercentilList = ({max, trainingMax}) => {

  const rows = []

  for (let i=1; i <= 100; i++) {
    rows.push(
      <Col xs="50%" md="25%" lg="1/6" style={{"whiteSpace": "nowrap"}} key={i}>
        <Card className="primary bg-primary">{i} %</Card>
        <Card>{(trainingMax/100*(i)).toFixed(2)}</Card>
      </Col>
    )
  }

  return (
    <div id="percentil-list">
      <Row className="text-xs-center">
        {rows}
      </Row>
    </div>
  )
}

export default PercentilList
