import React, { PropTypes, Component } from 'react'
import {connect} from 'react-redux'
import {postMax, updateMax, setFormDataIfNeeded} from '../actions'
import {Card, Row, Col, FormIconField, Button} from 'elemental'
import { Field, Form, actions } from 'react-redux-form';

class AddForm extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const {dispatch, params, max, userHash} = this.props
    dispatch(setFormDataIfNeeded(max, userHash, params.maxId))
  }

  handleSubmit(formData) {
    const {discipline, max} = formData
    const {dispatch, params, userHash} = this.props

    if(params.maxId) {
      dispatch(updateMax(params.maxId, userHash, discipline, max))
    } else {
      dispatch(postMax(userHash, discipline, max))
    }

  }

  render() {
    return (
      <div id="add-form">
        <Card>
          <Row className="clearfix">
            <Col md="60%" sm="100%" className="m-x-auto">
              <Form model="add" onSubmit={(val) => this.handleSubmit(val)} autoComplete="off">
                <FormIconField iconPosition="left" iconKey="bookmark" iconFill="primary">
                  <Field model="add.discipline">
                    <input type="text" name="discipline" placeholder="discipline" className="max-input form-control form-control-lg" />
                  </Field>
                </FormIconField>
                <FormIconField iconPosition="left" iconKey="database" iconFill="danger">
                  <Field model="add.max">
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
  userHash: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    userHash: state.user.hash,
    add: state.add,
    max: state.max.items
  }
}

const mapDispatchToProps = (dispatch, ownprops) => {
  return {
    handleSubmit: (user, name, weight) => {
      dispatch(postMax(user, name, weight))
    },
    dispatch
  }
}

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddForm)

export default FormContainer
