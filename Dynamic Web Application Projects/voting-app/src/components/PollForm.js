import React, { Component } from 'react'
import PropTypes from 'prop-types'


// const propTypes = {}

// const defaultProps = {}

class PollForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    let {poll, submitPoll} = this.props;
    // console.log(poll.poll_question);
    // console.log(poll.poll_choices);
    return (
      <form>
        <input type="text" name="poll_question" value={poll.poll_question} onChange={this.props.handleTitleChange}/>
        {this.props.poll.poll_choices.map((choice, ind) => {
          return <input key={ind} type="text" name={ind} value={choice} onChange={this.props.handleChoiceChange}/>
        })}
        <input type="submit" value={this.props.mode} onClick={submitPoll}/>
      </form>
    )
  }
}

// PollForm.propTypes = propTypes

// PollForm.defaultProps = defaultProps

export default PollForm
