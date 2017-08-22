import React from 'react';  
import Chart from 'chart.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SinglePollDisplay from './SinglePollDisplay';
import { pollVote } from '../actions/actions';

class PollEditable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleVoteChoiceChange = this.handleVoteChoiceChange.bind(this);
    this.handleVoteSubmit = this.handleVoteSubmit.bind(this);
  }

  componentWillMount() {
    if (this.props.match.params.mode === 'vote') {
      console.log("mode:", this.props.match.params.mode);
      const {uuid} = this.props.match.params;
      this.setState({
        poll: this.props.polls.find(poll => {
          return poll.key === uuid;
        })}
      );
    }
  }

  componentDidMount() {
    this.setState({
      currentVoteOption: this.state.poll.poll_choices[0]
    });
  }
  
  handleVoteChoiceChange(e) {
    // console.dir(e.target.value);
    this.setState({currentVoteOption: e.target.value});
  }
  
  handleVoteSubmit (e) {
    e.preventDefault();
    // console.log(this.props.actions);
    this.props.actions.pollVote(this.state.poll.key, this.state.currentVoteOption);
  }
  
  render() {
    // const {question, votes, ind, choices} = this.state.poll;
    const poll = this.state.poll;
    return (
      <div>
        <form id="vote_select">
          <select form="vote-select" onChange={this.handleVoteChoiceChange}>
            {this.state.poll.poll_choices.map((choice, ind) => {
              return (
                <option key={ind} value={choice}>{choice}</option>
              )
            })}
          </select>
          <input type="submit" value="Vote" onClick={this.handleVoteSubmit}/>
        </form>
        <div>
          <SinglePollDisplay question={poll.poll_question} votes={poll.poll_votes} choices={poll.poll_choices} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    polls: state.polls
  }
};
console.log(pollVote);
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({pollVote}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PollEditable);

// export default PollEditable;