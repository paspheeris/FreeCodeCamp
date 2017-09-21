import React, {Component} from 'react';
import PropTypes from 'prop-types';

import APIs from '../asyncActions.js';
// import { connect } from 'react-redux';
// import { SEARCH_BOX_KEY_PRESS } from '../constants/actionTypes.js';

const propTypes = {
  searchFormSubmit: PropTypes.func.isRequired,
  searchFormValue: PropTypes.string.isRequired
}

const defaultProps = {
  searchFormValue: ''
}
// = ({ onKeyDown, searchFormValue }) => {
class SearchForm extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      formText: ''
    };
  }
  render() {
  const {searchFormValue} = this.props;
    return (
      <form onSubmit={this.hur}>
        <input type="text" value={this.state.value} placeholder="enter a location" onKeyDown={this.handleKeyDown}/>
      </form>
    )
  }
  handleKeyDown = (event) => {
    this.setState({ formText: event.target.value });
  }
  hur = (event) => {
    // console.log('in function submit');
    event.preventDefault();
    const payload = APIs.Yelp.getBars(this.state.formText);
    this.props.searchFormSubmit(payload);
  };
}
// bindActionCreators({ actions }, dispatch)
// const mapDispatchToProps = dispatch => ({
//   onKeyDown: payload =>
//     dispatch({ type: SEARCH_BOX_KEY_PRESS, payload })
// })

SearchForm.propTypes = propTypes

SearchForm.defaultProps = defaultProps

export default SearchForm;
// export default connect(() => {}, mapDispatchToProps)(SearchForm);
