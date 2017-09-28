import React, { Component } from 'react'
import auth from '../auth/Auth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Message } from 'semantic-ui-react';

import { injectAuthData } from '../actions/actions';

import Polls from './Polls';
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
    console.log('this.props.profile:', this.props.profile);
    return (
      <div className="Profile-wrapper">
      {!this.props.profile && 
        <Message color="orange">
          <Message.Header>It looks like you haven't created any polls yet.</Message.Header>
          <p>Click on 'Create a Poll' to get started</p>
        </Message>}
      <div className="pollsDisplay-topText">
        <h1>Your Polls:</h1>
        <i>Click on a poll to edit or delete it.</i>
      </div>
      {this.props.profile && 
        <Polls filteredPolls={this.props.userPolls} linkToEdit={true}/>}
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
function getUserPolls(state) {
  if(!state.auth.profile) return null;
  return Object.values(state.polls.byId).filter(poll => {
    return poll.author_id === state.auth.profile.sub;
  });
}
function mapStateToProps(state,ownProps) {
  return {
    profile: state.auth.profile,
    userPolls: getUserPolls(state)
  }
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({injectAuthData}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

// export default Profile
