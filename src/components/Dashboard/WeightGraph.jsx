// src\components\Dashboard\WeightGraph.jsx

import { GraphContainer, ChartContainer } from './Styles/Graphs.styled';
import './Styles/Graph.css';

const WeightGraph = () => {
  const upperRowValues = Array.from({ length: 31 }, () =>
    (Math.random() * (80 - 60) + 60).toFixed(0)
  );
  const lowerRowValues = Array.from({ length: 31 }, (_, i) =>
    (i + 1).toString()
  );

  return (
    <GraphContainer className="weight-container">
      <div className="weightTitle">
        <h2 className="graphTitle">Weight</h2>
        <h3 className="graphValue">Average value: 68 kg</h3>
      </div>
      <ChartContainer className="weight-graph-line">
        <div className="table-container">
          <div className="upper-row">
            {upperRowValues.map((value, index) => (
              <div key={index} className="table-cell">
                {value}
              </div>
            ))}
          </div>
          <div className="lower-row">
            {lowerRowValues.map((value, index) => (
              <div key={index} className="table-cell">
                {value}
              </div>
            ))}
          </div>
        </div>
      </ChartContainer>
    </GraphContainer>
  );
};

export default WeightGraph;
