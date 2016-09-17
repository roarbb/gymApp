import React, { PropTypes, Component } from 'react'
import {connect} from 'react-redux'
import {postMax, updateMax, setFormDataIfNeeded, toggleModal} from '../actions'
import {Card, Row, Col, FormIconField, Button, Glyph} from 'elemental'
import { Field, Form } from 'react-redux-form';
import DeleteMaxButton from '../components/DeleteMaxButton'

class AddForm extends Component {
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
    const { addForm: { fields } } = this.props;

    return (
      <div id="add-form">
        <Card>
          <Row className="clearfix">
            <Col md="60%" sm="100%" className="m-x-auto">
              <Form model="add" onSubmit={(val) => this.handleSubmit(val)} autoComplete="off">

                  <Field
                    model="add.discipline"
                    validators={{
                      required: (val) => val && val.length && 'Email is too short'
                    }}
                    validateOn="change">

                    { fields.discipline
                      && !fields.discipline.valid
                      && fields.discipline.submitFailed &&
                      <div className="alert alert-danger fade in" role="alert">
                        <Glyph icon="arrow-down" /> Please enter the name here.
                      </div>
                    }

                    <FormIconField iconPosition="left" iconKey="bookmark" iconFill="primary">
                    <input type="text" name="discipline" placeholder="Name" className="max-input form-control form-control-lg" />
                    </FormIconField>
                  </Field>

                  <Field
                    model="add.max"
                    validators={{
                      required: (val) => val && val.length,
                      isNumber: (val) => val && !isNaN(val)
                    }}
                    validateOn="change">

                    { fields.max
                      && (!fields.max.untouched && !fields.max.valid) &&
                      <div className="alert alert-danger fade in" role="alert">
                        <Glyph icon="arrow-down" /> Please enter valid number here.
                      </div>
                    }

                    <FormIconField iconPosition="left" iconKey="database" iconFill="danger">
                      <input type="text" name="weight" placeholder="Weight" className="max-input form-control form-control-lg" />
                    </FormIconField>

                  </Field>

                {this.props.params.maxId &&
                  <DeleteMaxButton modal={this.props.modal} toggleModal={this.props.toggleModal} {...this.props} />
                }
                <Button
                  submit
                  type="hollow-success"
                  className="pull-xs-right"><Glyph icon='check' type='success' /> Save</Button>
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
    max: state.max.items,
    modal: {
      isOpen: state.modal.isOpen
    },
    addForm: state.addForm
  }
}

const mapDispatchToProps = (dispatch, ownprops) => {
  return {
    handleSubmit: (user, name, weight) => {
      dispatch(postMax(user, name, weight))
    },
    toggleModal: () => dispatch(toggleModal()),
    dispatch
  }
}

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddForm)

export default FormContainer
