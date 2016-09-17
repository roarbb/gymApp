import React from 'react'
import {Row, Col, Card} from 'elemental'

const PercentilList = ({max, trainingMax}) => {

  const rows = []
  const basis = '25%'

  for (let i=1; i <= 100; i++) {
    rows.push(
      <Col basis={basis} style={{"whiteSpace": "nowrap"}} key={i}>
        <Card className="primary bg-primary">{i} % | {(trainingMax/100*(i)).toFixed(2)}</Card>
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
