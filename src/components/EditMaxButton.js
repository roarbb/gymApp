import React from 'react'
import {Link} from 'react-router'
import {Button, Glyph} from 'elemental'

const EditMaxButton = ({maxId}) => {
  return(
    <Link to={`/edit/${maxId}`}>
      <Button type="hollow-primary">
        <Glyph icon='pencil' type='primary' /> Edit
      </Button>
    </Link>
  )
}

export default EditMaxButton
