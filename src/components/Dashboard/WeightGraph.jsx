// src\components\Dashboard\WeightGraph.jsx
// import React from 'react';
import { Line } from 'react-chartjs-2';
import { options } from './GraphsConfig';
import { GraphContainer, ChartContainer } from './Styles/Graphs.styled';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = {
  labels,
  datasets: [
    {
      label: 'Waight Dataset',
      data: labels.map(() => Math.floor(Math.random() * 1000)),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

const WeightGraph = () => {
  return (
    <GraphContainer>
      <h2>Weight</h2>
      <ChartContainer>
        <Line options={options} data={data} />
      </ChartContainer>
    </GraphContainer>
  );
};

export default WeightGraph;
