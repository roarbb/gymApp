import React, {PropTypes, Component} from 'react'
import {Card, Row, Col, FormIconField, Button} from 'elemental'
import { Field, Form } from 'react-redux-form';

class AddForm extends Component {
  handleSubmit(formData) {
    const {name, weight} = formData
    this.props.handleSubmit(name, weight, this.props.userHash)
  }

  render() {
    return (
      <div id="add-form">
        <Card>
          <Row className="clearfix">
            <Col md="60%" sm="100%" className="m-x-auto">
              <Form model="add" onSubmit={(val) => this.handleSubmit(val)} autoComplete="off">
                <FormIconField iconPosition="left" iconKey="bookmark" iconFill="primary">
                  <Field model="add.name">
                    <input type="text" name="discipline" placeholder="discipline" className="max-input form-control form-control-lg" />
                  </Field>
                </FormIconField>
                <FormIconField iconPosition="left" iconKey="database" iconFill="danger">
                  <Field model="add.weight">
                    <input type="text" name="weight" placeholder="weight" className="max-input form-control form-control-lg" />
                  </Field>
                </FormIconField>
                <Button
                  submit
                  type="hollow-success"
                  className="pull-xs-right"> Save</Button>
              </Form>
            </Col>
          </Row>
        </Card>
      </div>
    )
  }
}

AddForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  userHash: PropTypes.string.isRequired
}

export default AddForm
