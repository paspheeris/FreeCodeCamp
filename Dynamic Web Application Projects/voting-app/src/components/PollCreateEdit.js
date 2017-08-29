import React, { Component } from 'react';  
import Chart from 'chart.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { submitVote, createPoll } from '../actions/actions';


import SinglePollDisplay from './SinglePollDisplay';
import PollForm from './PollForm';
import LoginNotice from './LoginNotice';

class PollCreateEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      poll: this.props.poll
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleChoiceChange = this.handleChoiceChange.bind(this);
    this.manageNumberOfChoiceInputes = this.manageNumberOfChoiceInputes.bind(this);
    this.keepVotesInSyncWithChoices = this.keepVotesInSyncWithChoices.bind(this);
    this.submitPoll = this.submitPoll.bind(this);
    this.cleanChoicesVotes = this.cleanChoicesVotes.bind(this);
  }

  handleTitleChange(e) {
    // console.log(e.target, e.target.value);
    this.setState({
      poll: {...this.state.poll, poll_question: e.target.value}
    })
  }
  handleChoiceChange(e) {
    const ind = parseInt(e.target.name, 10);
    let updatedChoiceArr = [...this.state.poll.poll_choices];
    updatedChoiceArr[ind] = e.target.value;
    updatedChoiceArr = this.manageNumberOfChoiceInputes(updatedChoiceArr);
    // console.log(this.keepVotesInSyncWithChoices(updatedChoiceArr,this.state.poll.poll_votes));
    this.setState({
      poll: {...this.state.poll, poll_choices: updatedChoiceArr,
            poll_votes: this.keepVotesInSyncWithChoices(updatedChoiceArr,this.state.poll.poll_votes)}
    });
    // console.log(this.state.poll.poll_choices, this.state.poll.poll_votes);
  }
  manageNumberOfChoiceInputes(arrOfChoices) {
    //If an index contained the empty string, and it's not in the last position of the array delete it
    const filtered = arrOfChoices.filter((choice, ind) => {
      if(choice === '' && ind !== arrOfChoices.length - 1) return false;
      return true;
    });   
    //If the last item in the array isn't the empty string, concat on an empty string
    if (filtered[filtered.length - 1] !== '') return filtered.concat('');
    return filtered;
  }
  keepVotesInSyncWithChoices(arrOfChoices, arrOfVotes) {
    // console.log(arrOfChoices);
    return arrOfChoices.map((val, ind) => {
      if (arrOfVotes[ind]) return arrOfVotes[ind];
      else if(ind !== arrOfChoices.length - 1) return 0;
      else return '';
    })
  }
  submitPoll(e) {
    e.preventDefault();
    const cleaned = this.cleanChoicesVotes(this.state.poll);
    //TODO: validation of the cleaned poll
    this.props.actions.createPoll({poll: cleaned});

  }
  cleanChoicesVotes(poll) {
    let temp = {...poll};
    temp.poll_choices = temp.poll_choices.filter(choice => choice !== '');
    temp.poll_votes = temp.poll_votes.filter(vote => vote !== '');
    return temp;
  }
  componentDidMount() {
    this.setState({
      poll: {...this.state.poll, key: this.props.uuid, author_id: this.props.userId}
    });
    //Fix choice and vote arr in edit mode
    if(this.props.mode !== 'edit') return;
    // console.log('in');
    const choices = this.manageNumberOfChoiceInputes(this.state.poll.poll_choices);
    this.setState({
      poll: { ...this.state.poll, poll_choices: choices, poll_votes: this.keepVotesInSyncWithChoices(choices,this.state.poll.poll_votes)}
    });
  }
  render() {
    const {poll} = this.state;
    // console.log(poll.poll_choices);
    const {uuid, actions, mode, userId} = this.props;
    // console.log(actions);
    if(!userId) return (<LoginNotice message="You must be logged in to create or edit a poll."/>);
    return (
      <div>
        <PollForm poll={poll} handleTitleChange={this.handleTitleChange} handleChoiceChange={this.handleChoiceChange} mode={mode} submitPoll={this.submitPoll}/>
        <div>
          <SinglePollDisplay question={poll.poll_question} votes={poll.poll_votes} choices={poll.poll_choices} />
        </div>
      </div>
    )
  }
}

const blankPoll = {
      key: "",
      author_id: "",
      author_name: "",
      created: Date.now(),
      poll_question: "Poll Question" ,
      poll_choices: ['Choice A', 'Choice B', ''],
      poll_votes: [0, 0, ''],
      participants: []
}

function mapStateToProps(state,ownProps) {
  return {
    poll: state.polls.byId[ownProps.match.params.uuid] || blankPoll,
    uuid: ownProps.match.params.uuid,
    mode: ownProps.match.params.mode,
    userId: state.auth.profile ? state.auth.profile.sub : null
  }
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({submitVote, createPoll}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PollCreateEdit);