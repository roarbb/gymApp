import React, {PropTypes} from 'react'

const PercentilList = ({max}) => {

  const rows = []
  const trainingMax = max*0.9

  for (let i=1; i <= 25; i++) {
    rows.push(<div className="col-xs-3"><span className="tag tag-primary">{i} %</span> {(trainingMax/100*i).toFixed(2)}</div>)
    rows.push(<div className="col-xs-3"><span className="tag tag-primary">{i+25} %</span> {(trainingMax/100*(i+25)).toFixed(2)}</div>)
    rows.push(<div className="col-xs-3"><span className="tag tag-primary">{i+50} %</span> {(trainingMax/100*(i+50)).toFixed(2)}</div>)
    rows.push(<div className="col-xs-3"><span className="tag tag-primary">{i+75} %</span> {(trainingMax/100*(i+75)).toFixed(2)}</div>)
  }

  return (
    <div class="container">
      <div>Personal best <span className="tag tag-success">{max}</span></div>
      <div>Training max <span className="tag tag-danger">{trainingMax}</span></div>
      <hr />
      <div className="row">
        {rows}
      </div>
    </div>
  )
}

export default PercentilList
