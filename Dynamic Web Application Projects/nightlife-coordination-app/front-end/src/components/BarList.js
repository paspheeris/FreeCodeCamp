import React from 'react'
import PropTypes from 'prop-types'
import Bar from './Bar'
const propTypes = {
  bars: PropTypes.array
}

const defaultProps = {
  bars: []
}

const BarList = ({bars}) => {
  console.log(bars);
  return (
  <ul>
    {bars.map(bar => {
      return (<Bar id={bar.id} key={bar.id} name={bar.name} img_url={bar.img_url} 
      url={bar.url} rating={bar.rating} price={bar.price} display_phone={bar.display_phone} />)}
    )
    }
  </ul>
  )
}
  

BarList.propTypes = propTypes

BarList.defaultProps = defaultProps

export default BarList
