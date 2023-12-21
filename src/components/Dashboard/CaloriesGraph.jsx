// src\components\Dashboard\CaloriesGraph.jsx

import { Line } from 'react-chartjs-2';
import {
  commonOptions,
  commonXAxisOptions,
  caloriesYAxisOptions,
} from './GraphsConfig';
import { GraphContainer, ChartContainer } from './Styles/Graphs.styled';
import './Styles/MobStyles/mob.Graph.css';
import './Styles/TabletStyles/tab.Graph.css';
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
      pointRadius: 2,
      fill: false,
    },
  ],
};

const CaloriesGraph = () => {
  return (
    <GraphContainer className="scroll-container">
      <div className="caloriesTitle">
        <h2 className="graphTitle">Calories</h2>
        <h3 className="graphValue">
          Average value: <span className="caloriesValue">1700 cal</span>
        </h3>
      </div>

      <ChartContainer className="graph-line">
        <Line
          options={{
            ...commonOptions,
            scales: { x: commonXAxisOptions, y: caloriesYAxisOptions },
          }}
          data={data}
        />
      </ChartContainer>
    </GraphContainer>
  );
};

export default CaloriesGraph;
