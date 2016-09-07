import React from 'react'
import {Link} from 'react-router'
import {Button, Glyph} from 'elemental'

const AddMaxButton = () => {
  return(
    <Link to="/add">
      <Button type="hollow-primary" className="pull-xs-right">
        <Glyph icon='plus' type='primary' /> Add
      </Button>
    </Link>
  )
}

export default AddMaxButton
