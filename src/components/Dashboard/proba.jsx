// src\components\Dashboard\WaterGraph.jsx

import { Line } from 'react-chartjs-2';
import { commonOptions, waterYAxisOptions } from './GraphsConfig';
import { GraphContainer, ChartContainer } from './Styles/Graphs.styled';
import './Styles/WaterGraph.css';

const data = {
  labels: Array.from({ length: 31 }, (_, i) => i + 1),
  datasets: [
    {
      label: '',
      data: Array.from({ length: 31 }, () => Math.floor(Math.random() * 1000)),
      borderColor: '#4ed8da',
      borderWidth: 1,
      pointBackgroundColor: '#4ed8da',
      pointRadius: 0,
      fill: false,
    },
  ],
};

const WaterGraph = () => {
  return (
    <GraphContainer>
      <div className="waterTitle">
        <h2 className="graphTitle">Water</h2>
        <h3 className="graphValue">Average value: 1700 ml</h3>
      </div>
      <ChartContainer className="water-graph-line">
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
