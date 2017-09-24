import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux';
import { SEARCH_FORM_SUBMIT } from '../constants/actionTypes.js';

import SearchForm from './SearchForm';
import BarList from './BarList';
import Map from './Map';

const propTypes = {
  searchFormSubmit: PropTypes.func.isRequired,
  searchFormValue: PropTypes.string.isRequired
}

const defaultProps = {
  searchFormValue: ''
}

const MainView = ({ searchFormSubmit, searchFormValue, bars, latLngs, center }) => (
  <div className="mainview-wrapper">
    {/*{console.log(extractLatLngFromBars(bars))}*/}
    <div className="mainview-left-group">
      <SearchForm className="search-form" searchFormSubmit={searchFormSubmit} searchFormValue={searchFormValue} />
      <BarList bars={bars} />
    </div>
    <div className="mainview-right-group">
     <Map latLngs={latLngs} center={center}/> 
    </div>
  </div>
)
// const extractLatLngFromBars = (bars) => {
//   return bars.map(bar => {
//     return bar.coordinates;
//   })
// }
const mapDispatchToProps = dispatch => ({
  searchFormSubmit: payload => 
    dispatch({type: SEARCH_FORM_SUBMIT, payload})
})
const mapStateToProps = state => {
  return ({
    searchFormValue: state.searchForm.value,
    bars: state.bars,
    latLngs: state.location.latLngs,
    center: state.location.center 
  })
}
MainView.propTypes = propTypes

MainView.defaultProps = defaultProps

export default connect(mapStateToProps, mapDispatchToProps)(MainView);

