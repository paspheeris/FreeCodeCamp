import React from 'react';  
import Chart from 'chart.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SinglePollDisplay from './SinglePollDisplay';
import { submitVote } from '../actions/actions';

class PollEditable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.uuid = this.props.match.params.uuid;

    this.handleVoteChoiceChange = this.handleVoteChoiceChange.bind(this);
    this.handleVoteSubmit = this.handleVoteSubmit.bind(this);
  }

  componentWillMount() {
    if (this.props.match.params.mode === 'vote') {
      // console.log("mode:", this.props.match.params.mode);
      const {uuid} = this.props.match.params;
      this.setState({
        poll: this.props.polls[uuid]
      });
    }
  }

  // componentWillReceiveProps(nextProps) {
  //     if(this.state.poll === nextProps.poll) return;
  //     console.log(this.state.poll.poll_votes);
  //     const {uuid} = this.props.match.params;
  //     this.setState({
  //       poll: this.props.polls[uuid]
  //     });
  // }
  
  // componentWillUpdate() {

  // }

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
    this.props.actions.submitVote(this.state.poll.key, this.state.currentVoteOption);
  }
  
  render() {
    // const {question, votes, ind, choices} = this.state.poll;
    // const poll = this.state.poll;
    // console.log(this.uuid);
    const poll = this.props.polls[this.uuid];
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
    polls: state.polls.byId,
    allIds: state.polls.allIds
  }
};
// console.log(submitVote);
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({submitVote}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PollEditable);

// export default PollEditable;