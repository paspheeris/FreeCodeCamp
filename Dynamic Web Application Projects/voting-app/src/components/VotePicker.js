import React, { Component } from 'react'
import PropTypes from 'prop-types'


const propTypes = {}

const defaultProps = {}

class VotePicker extends Component {
  constructor(props) {
    super(props)
    this.poll_choices = this.props.poll_choices;
    
    this.state = {
      currentVoteOption: this.poll_choices[0]
    }

    this.handleVoteChoiceChange = this.handleVoteChoiceChange.bind(this);
    this.handleVoteSubmit = this.handleVoteSubmit.bind(this);
  }

  handleVoteChoiceChange(e) {
    this.setState({currentVoteOption: e.target.value});
  }
  handleVoteSubmit (e) {
    e.preventDefault();
    this.props.submitVote({uuid: this.props.poll_key, choice: this.state.currentVoteOption});
  }

  render() {
    // console.log(this.props.voteError);
    return (
        <form id="vote_select">
          <select form="vote-select" onChange={this.handleVoteChoiceChange}>
            {this.poll_choices.map((choice, ind) => {
              return (
                <option key={ind} value={choice}>{choice}</option>
              )
            })}
          </select>
          {!this.props.votePending && <input type="submit" value="Vote" onClick={this.handleVoteSubmit}/>}
          {!this.props.voteError || <p>There was an error submitting your vote. Please try again.</p>}
        </form>
    )
  }
}

// VotePicker.propTypes = propTypes

// VotePicker.defaultProps = defaultProps

export default VotePicker
