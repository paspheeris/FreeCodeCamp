import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux';
import { SEARCH_FORM_SUBMIT } from '../constants/actionTypes.js';

import SearchForm from './SearchForm';

const propTypes = {
  searchFormSubmit: PropTypes.func.isRequired,
  searchFormValue: PropTypes.string.isRequired
}

const defaultProps = {
  searchFormValue: ''
}

const MainView = ({ searchFormSubmit, searchFormValue }) => (
  <div>
    <SearchForm searchFormSubmit={searchFormSubmit} searchFormValue={searchFormValue} />
  </div>
)
const mapDispatchToProps = dispatch => ({
  searchFormSubmit: payload => 
    dispatch({type: SEARCH_FORM_SUBMIT, payload})
})
const mapStateToProps = state => {
  return ({
    searchFormValue: state.searchForm.value
  })
}
MainView.propTypes = propTypes

MainView.defaultProps = defaultProps

export default connect(mapStateToProps, mapDispatchToProps)(MainView);

