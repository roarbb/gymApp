import React, {PropTypes} from 'react'
import {Card, Row, Col, FormIconField, FormInput, Button} from 'elemental'

const AddForm = () => {
  return (
    <div id="add-form">
      <Card>
        <Row className="clearfix">
          <Col md="60%" sm="100%" className="m-x-auto">
            <FormIconField iconPosition="left" iconKey="bookmark" iconFill="primary">
              <FormInput placeholder="Discipline" size="lg" />
            </FormIconField>
            <FormIconField iconPosition="left" iconKey="database" iconFill="danger">
              <FormInput placeholder="Weight" size="lg" />
            </FormIconField>
            <Button type="hollow-success" className="pull-xs-right">Save</Button>
          </Col>
        </Row>
      </Card>
    </div>
  )
}

AddForm.propTypes = {

}

export default AddForm;
