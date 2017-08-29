import React, { Component } from 'react'
import auth from '../auth/Auth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { injectAuthData } from '../actions/actions';
// // import PropTypes from 'prop-types'
// import styles from './style.css'

// const propTypes = {}

// const defaultProps = {}

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount() {
      if(this.props.location.hash) {
      this.props.actions.injectAuthData({
        hash: this.props.location.hash
      });
      this.props.history.replace('/profile');
    }
  }

  render() {
    return (
      <div>
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h1>
      </div>
    )
  }
}

// Profile.propTypes = propTypes

// Profile.defaultProps = defaultProps
// function mapStateToProps(state,ownProps) {
//   return {
//     poll: state.polls.byId[ownProps.match.params.uuid] || blankPoll,
//     uuid: ownProps.match.params.uuid,
//     mode: ownProps.match.params.mode
//   }
// };

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({injectAuthData}, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Profile);

// export default Profile
