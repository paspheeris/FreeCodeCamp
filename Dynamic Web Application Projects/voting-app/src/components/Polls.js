import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SinglePollDisplay from './SinglePollDisplay';

const Polls = ({polls, allIds, filterType, filter}) => {
  // console.log(polls);
  let idsToShow = allIds;
  if(filterType === 'showNone') return false;
  if(filterType === 'authorId') {
    idsToShow = allIds.filter(id => {
      return polls[id].author_id === filter;
    });
    
  }
  // console.log(idsToShow);
  return (
    <div className="pollsDisplay-wrapper">
      {idsToShow.map((pollId, ind) => {
        const poll = polls[pollId];
        if(!poll) return false;
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

