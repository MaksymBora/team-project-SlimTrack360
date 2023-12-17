// src\components\Dashboard\CaloriesGraph.jsx

import { Line } from 'react-chartjs-2';
import { commonOptions } from './GraphsConfig';
import { GraphContainer, ChartContainer } from './Styles/Graphs.styled';
import './Styles/Graph.css';

const data = {
  labels: Array.from({ length: 31 }, (_, i) => i + 1),
  datasets: [
    {
      label: '', // Как убрать эту надпись? Показывает undefined
      data: Array.from({ length: 31 }, () => Math.floor(Math.random() * 1000)),
      borderColor: '#e3ffa8',
      borderWidth: 1,
      pointBackgroundColor: '#e3ffa8',
      pointRadius: 0,
      fill: false,
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
        <Line options={commonOptions} data={data} />
      </ChartContainer>
    </GraphContainer>
  );
};

export default CaloriesGraph;
