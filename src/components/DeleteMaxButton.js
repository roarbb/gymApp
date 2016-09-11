import React, {Component} from 'react'
import {Link} from 'react-router'
import {Button, Glyph, Modal, ModalHeader, ModalBody, ModalFooter} from 'elemental'
import {deleteMax} from '../actions'

class DeleteMaxButton extends Component {
  constructor(props) {
    super(props)
  }

  handleDelete(props) {
    const {dispatch, params, userHash} = props

    if(params.maxId) {
      dispatch(deleteMax(params.maxId, userHash))
    }
  }

  render() {
    const {modal, toggleModal, handleDelete} = this.props

    return(
      <div className="pull-xs-left">
        <Button type="hollow-danger" onClick={toggleModal}>
          <Glyph icon="trashcan" /> Delete
        </Button>

        <Modal isOpen={modal.isOpen} onCancel={toggleModal} backdropClosesModal>
        	<ModalHeader text="Please confirm the action" showCloseButton onClose={toggleModal} />
        	<ModalBody>Do you really want to delete this? Action can not be reverted.</ModalBody>
        	<ModalFooter>
            <Button type="hollow-danger" onClick={() => this.handleDelete(this.props)}>
              <Glyph icon="trashcan" /> Yes, Delete
            </Button>
        		<Button type="link-cancel" onClick={toggleModal}>Cancel</Button>
        	</ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default DeleteMaxButton
