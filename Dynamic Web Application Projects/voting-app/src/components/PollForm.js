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
    const {poll} = this.props;
    return (
      <form>
        <input type="text" name="poll_question" value={poll.poll_question} onChange={this.props.handleFormChange}/>
        {poll.poll_choices.map((choice, ind) => {
          return <input key={ind} type="text" name={choice} value={choice} onChange={this.props.handleFormChange}/>
        })}
        {/*<input type="text" name="" onChange={this.props.handleFormChange}/>*/}
      </form>
    )
  }
}

// PollForm.propTypes = propTypes

// PollForm.defaultProps = defaultProps

export default PollForm
