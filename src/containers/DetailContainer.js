import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import PercentilList from '../components/PercentilList'

class DetailContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const {max} = this.props

    this.activeItem = max.find(item => {
      return item.id == this.props.params.maxId
    })
  }

  render() {
    return (
      <div>
        <h4>{this.activeItem.discipline}</h4>
        <PercentilList max={this.activeItem.max} />
      </div>
    )
  }
}

DetailContainer.propTypes = {

};

function mapStateToProps(state) {
  return {
    max: state.max.items
  }
}

export default connect(mapStateToProps)(DetailContainer)
