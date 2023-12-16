// src\components\Dashboard\CaloriesGraph.jsx

import { Line } from 'react-chartjs-2';
import { GraphContainer, ChartContainer } from './Styles/Graphs.styled';
import { options } from './GraphsConfig';
import './Styles/CaloriesGraph.css';

const labels = Array.from({ length: 31 }, (_, index) => (index + 1).toString());
const data = {
  labels,
  datasets: [
    {
      label: '',
      data: labels.map(() => Math.floor(Math.random() * 1000)),
    },
  ],
};

const CaloriesGraph = () => {
  return (
    <GraphContainer>
      <div className="caloriesTitle">
        <h2 className="graphTitle">Calories</h2>
        <h3 className="graphValue">Average value: 1700 cal</h3>
      </div>
      <ChartContainer className="calories-graph-line">
        <Line options={options} data={data} />
      </ChartContainer>
    </GraphContainer>
  );
};

export default CaloriesGraph;
