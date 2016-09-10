import React, { Component } from 'react'
import AddForm from '../components/AddForm'
import {connect} from 'react-redux'
import {postMax} from '../actions'

const mapStateToProps = (state) => {
  return {
    userHash: state.user.hash
  }
}

const mapDispatchToProps = (dispatch, ownprops) => {
  return {
    handleSubmit: (user, name, weight) => {
      dispatch(postMax(user, name, weight))
    }
  }
}

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddForm)

export default FormContainer
