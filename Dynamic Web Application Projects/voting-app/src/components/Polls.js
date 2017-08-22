import React from 'react';
import { connect } from 'react-redux';

import SinglePollDisplay from './SinglePollDisplay';

const Polls = ({polls}) => {
  return (
    <div className="pollsDisplay-wrapper">
      {polls.map((poll, ind) => {
        return <SinglePollDisplay key={ind} question={poll.poll_question} choices={poll.poll_choices} votes={poll.poll_votes} ind={ind}/>
      })}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    polls: state.polls
  }
};

export default connect(mapStateToProps, () => ({}))(Polls);

