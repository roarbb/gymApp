import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import {Card, Row, Col, Glyph, Button} from 'elemental'

const MaxList = ({max}) => {
  return (
    <div>
      <Card id="maxList" className="clearfix">
        {max.map(item => {
          return (
            <Link to={`/max/${item.id}`} key={item.id}>
              <Card className="maxRow">
                <Row>
                  <Col sm="80%" className="text-xs-center text-sm-left">
                    <Glyph icon='flame' type='primary' /> {item.discipline}
                  </Col>
                  <Col sm="20%" className="text-xs-center">
                    <span className="maxNumber">{item.max} kg</span>
                  </Col>
                </Row>
              </Card>
            </Link>
          )
        })}
        <Button type="hollow-primary" className="pull-xs-right">
          <Glyph icon='plus' type='primary' /> Add
        </Button>
      </Card>
    </div>
  )
};

MaxList.propTypes = {
  max: PropTypes.array.isRequired
};

export default MaxList;
