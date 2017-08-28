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
    auth.handleAuthentication();
    //Dispatch action to put auth data in store from localstorage
    this.props.actions.injectAuthData({
    expires_at: JSON.parse(localStorage.getItem('expires_at')),
    access_token: localStorage.getItem('access_token'),
    id_token: localStorage.getItem('id_token')
    });
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
