import React from 'react'
import {XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, LineSeries} from 'react-vis'

const data = [
  {x: 0, y: 0},
  {x: 1, y: 1},
  {x: 2, y: 2},
  {x: 3, y: 3},
  {x: 4, y: 4},
  {x: 5, y: 5},
  {x: 6, y: 6},
  {x: 7, y: 7},
  {x: 8, y: 8},
  {x: 9, y: 9}
];

const Chart = props => {
	return(
		<div>
			React-Vis CHART HERE
			<XYPlot height={300} width={300} >
			  <VerticalGridLines />
			  <HorizontalGridLines />
			  <XAxis />
			  <YAxis />
			  <LineSeries data={data} />	
			</XYPlot>	
		</div>
	)
}

export default Chart
//switch to redux props after display is satisfaactory