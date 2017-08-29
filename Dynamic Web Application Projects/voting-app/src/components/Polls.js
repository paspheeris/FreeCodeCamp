import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SinglePollDisplay from './SinglePollDisplay';

const Polls = ({allPolls, allIds, filteredPolls}) => {
  // console.log(polls);
  console.log(allPolls);
  let pollsToShow = filteredPolls || allPolls;
  // if(filterType === 'showNone') return false;
  // if(filterType === 'authorId') {
  //   idsToShow = allIds.filter(id => {
  //     return polls[id].author_id === filter;
  //   });
    
  
  // console.log(idsToShow);
  return (
    <div className="pollsDisplay-wrapper">
      {Object.values(pollsToShow).map((poll, ind) => {
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
    allPolls: state.polls.byId,
    allIds: state.polls.allIds
  }
};

export default connect(mapStateToProps, () => ({}))(Polls);

