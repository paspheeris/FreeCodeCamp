import React, { Component } from 'react';  
import Chart from 'chart.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { submitVote } from '../actions/actions';


import SinglePollDisplay from './SinglePollDisplay';
import PollForm from './PollForm';

class PollCreateEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      poll: this.props.poll
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleTitleChange(e) {
    console.log(e.target, e.target.value);
    this.setState({
      poll: {...this.state.poll, poll_question: e.target.value}
    })
  }
  
  render() {
    const {poll} = this.state;
    const {uuid, actions} = this.props;
    return (
      <div>
        <PollForm poll={poll} handleFormChange={this.handleTitleChange}/>
        <div>
          <SinglePollDisplay question={poll.poll_question} votes={poll.poll_votes} choices={poll.poll_choices} />
        </div>
      </div>
    )
  }
}

const blankPoll = {
      key: "",
      author_uuid: "",
      author_name: "",
      created: Date.now(),
      poll_question: "Poll Question" ,
      poll_choices: ['Choice A', 'Choice B'],
      poll_votes: [0, 0],
      participants: []
}

function mapStateToProps(state,ownProps) {
  return {
    poll: state.polls.byId[ownProps.match.params.uuid] || blankPoll,
    uuid: ownProps.match.params.uuid
  }
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({submitVote}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PollCreateEdit);