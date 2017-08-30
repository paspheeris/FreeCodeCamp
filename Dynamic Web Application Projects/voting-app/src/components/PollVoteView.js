import React from 'react';  
import Chart from 'chart.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SinglePollDisplay from './SinglePollDisplay';
import VotePicker from './VotePicker';
import { submitVote } from '../actions/actions';

const PollVoteView =  ({poll, uuid, actions, votePending, voteError}) => {
  return (
    <div>
      <VotePicker allChoices={poll.allChoices} poll_key={uuid} submitVote={actions.submitVote} votePending={votePending} voteError={voteError} />
      <div>
        <SinglePollDisplay poll={poll} votePending={votePending} voteError={voteError}/>
      </div>
    </div>
  )
}

function mapStateToProps(state,ownProps) {
  return {
    poll: state.polls.byId[ownProps.match.params.uuid],
    uuid: ownProps.match.params.uuid,
    votePending: state.ui.votePending,
    voteError: state.ui.voteError
  }
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({submitVote}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PollVoteView);

