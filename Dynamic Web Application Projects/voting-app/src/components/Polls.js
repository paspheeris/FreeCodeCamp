import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SinglePollDisplay from './SinglePollDisplay';

const Polls = ({polls}) => {
  return (
    <div className="pollsDisplay-wrapper">
      {polls.map((poll, ind) => {
        return (
          <Link to={`/poll/vote/${poll.key}`}>
            <SinglePollDisplay key={ind} question={poll.poll_question} choices={poll.poll_choices} votes={poll.poll_votes} ind={ind}/>
          </Link>
          )
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

