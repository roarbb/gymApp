import React, { Component } from 'react'
import AddForm from '../components/AddForm'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return {
    userHash: state.user.hash
  }
}

const mapDispatchToProps = (dispatch, ownprops) => {
  return {
    handleSubmit: (name, weight, user) => {
      console.log('args: ', weight, user, name);
    }
  }
}

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddForm)

export default FormContainer
