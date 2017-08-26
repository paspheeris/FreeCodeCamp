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
    const {question, ind, choices} = this.props; 
    let {votes} = this.props;
    let noVotesYet = false;
    //By default, no chart will be drawn if the array of votes for a poll
    //only contains 0's. In that case, we substitute an array of 1's for the votes, and in the label callback for the chart below, we show a decremented version for the labels if the noVotesYet flag === true
    if(votes.slice(0, votes.length - 1).every(val => val === 0) && votes[votes.length - 1] === '') {
      votes = votes.slice(0, votes.length - 1).map(val => val + 1);
      // console.log(votes);
      choices.splice(choices.length - 1, 1);
      noVotesYet = true;
    }
    // console.log(choices, votes);
    const ctx = canvasEl;
    this.myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: choices,
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
    const {question, votes, ind} = this.props;
    return (
    <div className="SinglePollDisplay-wrapper">
       {/*style={{width:"30%", height:"30%"}}*/}
      <canvas ref={(canvas) => {this.canvasEl = canvas}}></canvas>
    </div>
  )
  }
}

export default SinglePollDisplay;