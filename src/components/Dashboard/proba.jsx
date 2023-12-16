// src\components\Dashboard\CaloriesGraph.jsx

import { Line } from 'react-chartjs-2';
import { options } from './GraphsConfig';
import { GraphContainer, ChartContainer } from './Styles/Graphs.styled';
import './Styles/CaloriesGraph.css';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = {
  labels,
  datasets: [
    {
      label: 'Calories Dataset',
      data: labels.map(() => Math.floor(Math.random() * 1000)),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
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
      <ChartContainer>
        <Line options={options} data={data} />
      </ChartContainer>
    </GraphContainer>
  );
};

export default CaloriesGraph;
