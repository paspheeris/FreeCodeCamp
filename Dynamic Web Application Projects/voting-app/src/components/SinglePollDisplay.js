import React from 'react';  
import Chart from 'chart.js';


class SinglePollDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.myChart = null;
    this.drawChart = this.drawChart.bind(this);  
    this.randomRGBA = this.randomRGBA.bind(this);
  }

  drawChart(canvasEl) {
    // if(!canvasEl) return;
    const {question, allChoices, votesByChoice} = this.props.poll; 
    // let {votes, choices} = this.props;
    // const choices = Object.keys(this.props.poll.choicesAndVotes).sort();
    // let votes = choices.map(key => this.props.poll.choicesAndVotes[key]);
    const choices = allChoices;
    let votes = allChoices.map(choice => votesByChoice[choice]);
    let noVotesYet = false;
    //By default, no chart will be drawn if the array of votes for a poll
    //only contains 0's. In that case, we substitute an array of 1's for the votes, and in the label callback for the chart below, we show a decremented version for the labels if the noVotesYet flag === true
    if(votes.every(val => val === 0)) {
      votes = votes.map(val => val + 1);
      noVotesYet = true;
    }

    const ctx = canvasEl;
    this.myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [...choices],
        datasets: [{
            label: '# of Votes',
            data: [...votes],
            backgroundColor: choices.map(() => this.randomRGBA(.5)),
        }]
    },
    options: {
      title: {
        display: true,
        text: question
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
        var dataLabel = data.labels[tooltipItem.index];
				var value = ': ' + (data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] - (noVotesYet ? 1 : 0));

				dataLabel += value;
				

				return dataLabel;
          }
        }
      }
    }
  });

}
  randomRGBA(opacity) {
    function randomRGBAVal() {
      return Math.floor(Math.random() * 255) + 1;
    }
    return `rgba(${randomRGBAVal()}, ${randomRGBAVal()}, ${randomRGBAVal()}, ${opacity})`
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    //Don't redraw the chart simply because votePending changed
    // console.log(nextProps);
    if(!this.props.votePending && nextProps.votePending) return false;
    // if(this.props.votePending || this.props.voteError) return false;
    return true;
  }

  componentDidUpdate() {

    if(this.myChart) {
      this.myChart.destroy();
    }
    this.drawChart(this.canvasEl);
  }

  componentDidMount() {
    if(this.myChart) {
      this.myChart.destroy();
    }
    this.drawChart(this.canvasEl);
  }

  componentWillUnmount() {
    if(this.myChart) {
      this.myChart.destroy();
    }
  }

  render() {
    // const {question, votes, ind} = this.props;
    return (
    <div className="SinglePollDisplay-wrapper">
       {/*style={{width:"30%", height:"30%"}}*/}
      <canvas ref={(canvas) => {this.canvasEl = canvas}}></canvas>
    </div>
  )
  }
}

export default SinglePollDisplay;