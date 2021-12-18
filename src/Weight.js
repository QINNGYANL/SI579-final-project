import CanvasJSReact from './canvasjs.react';
import { Component } from 'react';
//import SplineChart from  './Spline Chart';
//import { useRef } from 'react';
import BasicSelect from './Setweight';
import CenteredTabs from './menu';

//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const monthSet = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

class Chart extends Component{

  constructor(props){
    super(props)
    this.state = {
      chartRef: null,
      list: [],
      charts: {
        title: {
          text: "Track Your Cat's Weight"
        },
        axisY: {
          includeZero: true
        },
        axisX: {
          valueFormatString: "MMM",
          interval: 1,
          intervalType: "month"
        },
        data: [
          {
            type: "spline",
            dataPoints: []
          }
        ]
      }
    }
  }

  chartUpdate = (month, weight) => {
    console.log(month, weight)
    const newList = [...this.state.list];
    if (newList.find(item => item.label === month)) {
      newList.forEach((it) => {
        it.y = Number(weight)
      })
    } else {
      newList.push({
        label: month, y: Number(weight)
      });
    }
    // 排序并将月份转为英文
    const dataPoints = newList.sort((a, b) => a.label - b.label).map((item) => {
      return {
        label: monthSet[item.label], y: item.y
      }
    })
    // 修改options就行了
    this.setState({
      list: newList, 
      charts: {
        title: {
          text: "Track Your Cat's Weight"
        },
        axisY: {
          includeZero: true
        },
        axisX: {
          valueFormatString: "MMM",
          interval: 1,
          intervalType: "month"
        },
        data: [
          {
            type: "spline",
            dataPoints: dataPoints
          }
        ]
      }
    })
  }

  render(){
    const { charts } = this.state

    return (
      <>
        <BasicSelect update={this.chartUpdate} />
        <div>
          <CanvasJSChart options = {charts} onRef = {ref => this.chartRef = ref} />
        </div>
      </> 
    );
  }
};
export default Chart;
