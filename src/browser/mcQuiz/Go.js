import React from 'react'
import { Link } from 'react-router-dom'
// import Gosvg from 'react-svg-loader!./go.svg'


function Go(props) {

  console.log('here is props.num from Go ' + props.num);

  return (
    <div id='go'>
      <Link to={{
        pathname: '/quiz',
        state: {
          numQs: props.num,
          data: props.data
        }
      }} style={{height:"3rem"}}>Go
      </Link>
    </div>
  )

}

export default Go
