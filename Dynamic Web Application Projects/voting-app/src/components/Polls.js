import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SinglePollDisplay from './SinglePollDisplay';

const Polls = ({allPolls, allIds, filteredPolls, linkToEdit}) => {
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
          <Link key={ind} to={linkToEdit ? `/poll/edit/${poll._id}` : `/poll/vote/${poll._id}`}>
            <SinglePollDisplay key={ind} poll={poll} ind={ind}/>
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

