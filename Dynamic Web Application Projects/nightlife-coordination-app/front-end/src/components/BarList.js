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
  <ul className="bar-list">
    {bars.map(bar => {
      return (<Bar id={bar.id} key={bar.id} name={bar.name} image_url={bar.image_url} 
      url={bar.url} rating={bar.rating} price={bar.price} display_phone={bar.display_phone} 
      categories={getBarCategories(bar)}/>)}
    )
    }
  </ul>
  )
}
const getBarCategories = (bar) => {
  return bar.categories.map(category =>{
    if(category.title !== "Bars") return category.title;
  })
}

BarList.propTypes = propTypes

BarList.defaultProps = defaultProps

export default BarList
