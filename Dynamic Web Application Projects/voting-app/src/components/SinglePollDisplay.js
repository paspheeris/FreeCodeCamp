import React from 'react';  
import Chart from 'chart.js';


class SinglePollDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.drawChart = this.drawChart.bind(this);  
    this.randomRGBA = this.randomRGBA.bind(this);
  }

  drawChart(canvasEl) {
    // console.log(canvasEl);
    if(!canvasEl) return;
    const {question, votes, ind, choices} = this.props;   
    // console.log(question) ;
    var ctx = canvasEl;
    var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: choices,
        datasets: [{
            label: '# of Votes',
            data: votes,
            backgroundColor: choices.map(() => this.randomRGBA(.5)),
            // borderColor: [
            //     'rgba(255,99,132,1)',
            //     'rgba(54, 162, 235, 1)',
            //     'rgba(255, 206, 86, 1)',
            // ],
            // borderWidth: 1
        }]
    },
    options: {
      title: {
        display: true,
        text: question
      }
    }
  });
  // console.log(myChart.data.datasets.backgroundColor);
  // console.log(choices.map(this.randomRGBA));
}
  randomRGBA(opacity) {
    function randomRGBAVal() {
      return Math.floor(Math.random() * 255) + 1;
    }
    return `rgba(${randomRGBAVal()}, ${randomRGBAVal()}, ${randomRGBAVal()}, ${opacity})`
  }
  
  render() {
    const {question, votes, ind} = this.props;
    return (
    <div className="SinglePollDisplay-wrapper">
       {/*style={{width:"30%", height:"30%"}}*/}
      <canvas ref={this.drawChart}></canvas>
    </div>
  )
  }
}

export default SinglePollDisplay;