import React, {PropTypes} from 'react'
import {Link} from 'react-router'

const MaxList = ({max}) => {
  return (
      <div className="list-group list-group-flush">
        {max.map(item => {
          return (
            <Link to={`/max/${item.id}`} className="list-group-item list-group-item-action" key={item.id}>
              <span className="tag tag-primary tag-pill pull-xs-right">{item.max}</span>
              {item.discipline}
            </Link>
          )
        })}
      </div>
  )
};

MaxList.propTypes = {
  max: PropTypes.array.isRequired
};

export default MaxList;
