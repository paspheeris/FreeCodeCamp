import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SEARCH_BOX_KEY_PRESS } from '../constants/actionTypes.js';

const propTypes = {
  onKeyPress: PropTypes.func.isRequired
}

const defaultProps = {}

const searchForm = ({ onKeyPress }) => (
  <div>
    <input type="text" />
  </div>
)
// bindActionCreators({ actions }, dispatch)
const mapDispatchToProps = dispatch => ({
  onKeyPress: payload =>
    dispatch({ type: SEARCH_BOX_KEY_PRESS, payload })
})

searchForm.propTypes = propTypes

searchForm.defaultProps = defaultProps

export default connect(() => {}, mapDispatchToProps)(searchForm);
