import React from 'react';  
import Chart from 'chart.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SinglePollDisplay from './SinglePollDisplay';
import VotePicker from './VotePicker';
import { submitVote } from '../actions/actions';

const PollVoteView =  ({poll, uuid, actions}) => {
  return (
    <div>
      <VotePicker poll_choices={poll.poll_choices} poll_key={uuid} submitVote={actions.submitVote} />
      <div>
        <SinglePollDisplay question={poll.poll_question} votes={poll.poll_votes} choices={poll.poll_choices} />
      </div>
    </div>
  )
}

function mapStateToProps(state,ownProps) {
  return {
    poll: state.polls.byId[ownProps.match.params.uuid],
    uuid: ownProps.match.params.uuid
  }
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({submitVote}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PollVoteView);

