import React, { Component } from 'react'
import PropTypes from 'prop-types'


const propTypes = {}

const defaultProps = {}

class VotePicker extends Component {
  constructor(props) {
    super(props)
    this.allChoices = this.props.allChoices;
    
    this.state = {
      currentVoteOption: this.allChoices[0],
      optionInputForm: ''
    }

    this.handleVoteChoiceChange = this.handleVoteChoiceChange.bind(this);
    this.handleVoteSubmit = this.handleVoteSubmit.bind(this);
    this.handleOptionInput = this.handleOptionInput.bind(this);
  }

  handleVoteChoiceChange(e) {
    this.setState({currentVoteOption: e.target.value});
  }
  handleVoteSubmit (e) {
    e.preventDefault();
    this.props.submitVote({
      uuid: this.props.poll_key, 
      choice: this.state.optionInputForm ? this.state.optionInputForm : this.state.currentVoteOption,
      addedChoice: this.state.optionInputForm ? true : false});
  }
  handleOptionInput(e) {
    this.setState({optionInputForm: e.target.value});
  }

  render() {
    // console.log(this.props.voteError);
    return (
        <form id="vote_select">
          <select form="vote-select" disabled={this.state.optionInputForm ? true : false} onChange={this.handleVoteChoiceChange}>
            {this.allChoices.map((choice, ind) => {
              return (
                <option key={ind} value={choice}>{choice}</option>
              )
            })}
          </select>
          <span>Or add your own choice to the poll:</span>
          <input type="text" value={this.state.optionInputForm} onChange={this.handleOptionInput} />
          {/*{this.state.currentVoteOption && <p>dd{this.state.currentVoteOption}</p>}*/}
          {!this.props.votePending && <input type="submit" value="Vote" onClick={this.handleVoteSubmit}/>}
          {!this.props.voteError || <p>There was an error submitting your vote. Please try again.</p>}
        </form>
    )
  }
}

// VotePicker.propTypes = propTypes

// VotePicker.defaultProps = defaultProps

export default VotePicker
