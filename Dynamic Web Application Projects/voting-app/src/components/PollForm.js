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
    let {question, choices, submitPoll} = this.props;
    return (
      <form>
        <input type="text" name="question" value={question} onChange={this.props.handleTitleChange}/>
        {choices.concat('').map((choice, ind) => {
          return <input key={ind} type="text" name={choice} value={choice} onChange={this.props.handleChoiceChange}/>
        })}
        <input type="submit" value={this.props.mode} onClick={submitPoll}/>
      </form>
    )
  }
}

// PollForm.propTypes = propTypes

// PollForm.defaultProps = defaultProps

export default PollForm
