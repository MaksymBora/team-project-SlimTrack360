// src\components\Dashboard\WaterGraph.jsx
// import React from 'react';
import { Line } from 'react-chartjs-2';
import { commonOptions, waterYAxisOptions } from './GraphsConfig';
import { GraphContainer, ChartContainer } from './Styles/Graphs.styled';
import './Styles/Graph.css';

const data = {
  labels: Array.from({ length: 31 }, (_, i) => i + 1),
  datasets: [
    {
      label: '',
      data: Array.from({ length: 31 }, () => Math.floor(Math.random() * 1000)),
      borderColor: '#e3ffa8',
      borderWidth: 1,
      pointBackgroundColor: '#e3ffa8',
      pointRadius: 0,
      fill: false,
    },
  ],
};

const WaterGraph = () => {
  return (
    <GraphContainer>
      <div className="caloriesTitle">
        <h2 className="graphTitle">Water</h2>
        <h3 className="graphValue">
          Average value: <span className="waterValue">1700 ml</span>
        </h3>
      </div>
      <ChartContainer className="graph-line">
        <Line
          options={{
            ...commonOptions,
            scales: { x: commonOptions.scales.x, y: waterYAxisOptions },
          }}
          data={data}
        />
      </ChartContainer>
    </GraphContainer>
  );
};

export default WaterGraph;
