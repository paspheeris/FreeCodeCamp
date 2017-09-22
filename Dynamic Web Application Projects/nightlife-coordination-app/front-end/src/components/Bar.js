import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {

}

const defaultProps = {}

const Bar = ({id, name, img_url, url, rating, price, display_phone}) => (
  <li>
    <p>{name}</p>
    <p>{price}</p>
  </li>
)

Bar.propTypes = propTypes

Bar.defaultProps = defaultProps

export default Bar
