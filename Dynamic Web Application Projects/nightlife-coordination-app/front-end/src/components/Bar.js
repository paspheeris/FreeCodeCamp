import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  categories: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string,
  imgage_url: PropTypes.string,
  url: PropTypes.string,
  rating: PropTypes.number,
  price: PropTypes.string,
  display_phone: PropTypes.string
}

const defaultProps = {}

const Bar = ({id, name, image_url, url, rating, price, display_phone, categories}) => (
  <li>
    <p>{name}</p>
    <img className="bar-image" src={image_url} alt="alt_image_text"/>
    <p>{price}</p>
    <p>{`${categories}`}</p>
  </li>
)

Bar.propTypes = propTypes

Bar.defaultProps = defaultProps

export default Bar
