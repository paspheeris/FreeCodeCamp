import React, { Component } from 'react';  
import Chart from 'chart.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import update from 'immutability-helper';

import { submitVote, createPoll, submitEdit } from '../actions/actions';


import SinglePollDisplay from './SinglePollDisplay';
import PollForm from './PollForm';
import LoginNotice from './LoginNotice';

class PollCreateEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...this.props.poll
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleChoiceChange = this.handleChoiceChange.bind(this);
    // this.manageNumberOfChoiceInputes = this.manageNumberOfChoiceInputes.bind(this);
    // this.keepVotesInSyncWithChoices = this.keepVotesInSyncWithChoices.bind(this);
    this.submitPoll = this.submitPoll.bind(this);
    // this.cleanChoicesVotes = this.cleanChoicesVotes.bind(this);
  }

  handleTitleChange(e) {
    // console.log(e.target, e.target.value);
    this.setState({
      question: e.target.value
    })
  }
  handleChoiceChange(e) {
    console.log(e.target.name, 'hur', e.target.value);

    let oldval = this.state.votesByChoice[e.target.name];

    let ind = this.state.votesByChoice.findIndex((obj, ind) => obj.choiceName === e.target.name);
    console.log('ind in PollCreateEdit.js', ind);
      if(ind === - 1) {
        this.setState(update(this.state, {votesByChoice: {
                                            $push: [{choiceName: e.target.value, count: 0}]},
                                          allChoices: {
                                            $push: [e.target.value]
                                          }}));
        return;
      }
      this.setState(
      update(this.state, {votesByChoice: {
                          [ind]: {choiceName: {$set: e.target.value} }},
                          allChoices: {
                            $apply: (choices) => {
                              if(e.target.name === '') return choices.concat(e.target.value);
                              else return choices.map(choice => choice === e.target.name ? e.target.value : choice)
                            }
                          }}
      ))
    
    
    // this.setState(
    //   update(this.state, {votesByChoice: {
    //                         $merge: {[e.target.value]: oldval || 0},
    //                         $unset: [e.target.name, '']},
    //                       allChoices: {
    //                         $apply: (choices) => {
    //                           if(e.target.name === '') return choices.concat(e.target.value);
    //                           else return choices.map(choice => choice === e.target.name ? e.target.value : choice)
    //                         }
    //                       }}

    // ))
  }
  submitPoll(e) {
    if(this.props.mode === 'edit') {
      e.preventDefault();
      this.props.actions.submitEdit({poll: this.state});
      return;
    }
    e.preventDefault();
  //   const cleaned = this.cleanChoicesVotes(this.state.poll);
    //TODO: validation of the cleaned poll
    this.props.actions.createPoll({poll: this.state});
  }

  componentDidMount() {
    this.setState({
      ...this.state.poll, key: this.props.uuid, author_id: this.props.userId
    });
  }
  componentWillReceiveProps(nextProps) {
    console.log('nextProps in CWRP', nextProps);
    this.setState({
      ...nextProps.poll
    });
  }
  render() {

    const {uuid, actions, mode, userId} = this.props;
    // console.log(actions);
    if(!userId) return (<LoginNotice message="You must be logged in to create or edit a poll."/>);
    return (
      <div>
        <PollForm question={this.state.question} choices={this.state.allChoices} handleTitleChange={this.handleTitleChange} handleChoiceChange={this.handleChoiceChange} mode={mode} submitPoll={this.submitPoll}/>
        <div>
          <SinglePollDisplay  poll={this.state}/>
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
      question: "Poll Question" ,

      allChoices: ["Choice A", "Choice B"],
      // votesByChoice: {"Choice A": 0, "Choice B": 0},
      votesByChoice: [{choiceName: "Choice A", count: 0}, {choiceName: "Choice B", count: 0}],
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
    actions: bindActionCreators({submitVote, createPoll, submitEdit}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PollCreateEdit);