import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SinglePollDisplay from './SinglePollDisplay';

const Polls = ({polls, allIds}) => {
  return (
    <div className="pollsDisplay-wrapper">
      {allIds.map((pollId, ind) => {
        const poll = polls[pollId];
        return (
          <Link key={ind} to={`/poll/vote/${poll.key}`}>
            <SinglePollDisplay key={ind} question={poll.poll_question} choices={poll.poll_choices} votes={poll.poll_votes} ind={ind}/>
          </Link>
          )
      })}
    </div>
  )
}

function mapStateToProps(state) {
  console.log(state);
  return {
    polls: state.polls.byId,
    allIds: state.polls.allIds
  }
};

export default connect(mapStateToProps, () => ({}))(Polls);

