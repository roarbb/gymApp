import React, {PropTypes} from 'react';

const MaxList = ({max}) => {
  return (
    <ul>
      {max.map(function(item) {
        return <li key={item.id}>{item.discipline} - {item.max}</li>
      })}
    </ul>
  )
};

MaxList.propTypes = {
  max: PropTypes.array.isRequired
};

export default MaxList;
