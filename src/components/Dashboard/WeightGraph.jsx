import { GraphContainer, ChartContainer } from './Styles/Graphs.styled';
import { useSelector } from 'react-redux';
import { selectTotalWeight } from '../../Redux/statisctics/selector';
import { getNumberOfDaysInMonth } from '../../utils/getNumberOfDaysInMonth';

import './Styles/MobStyles/mob.Graph.css';
import './Styles/TabletStyles/tab.Graph.css';
import './Styles/Graph.css';

const WeightGraph = () => {
  const totalWeightArray = useSelector(selectTotalWeight);

  if (!totalWeightArray) {
    return null;
  }

  const daysInMonth = getNumberOfDaysInMonth(totalWeightArray[0]?.date);

  const daysOfMonthArray = Array.from({ length: daysInMonth }, (_, i) =>
    (i + 1).toString()
  );

  const getAvarageWeight = () => {
    const weightsSum = totalWeightArray
      ?.map((item) => item.weight)
      ?.reduce((prevV, currentV) => prevV + currentV);
    return Math.round(weightsSum / totalWeightArray.length);
  };

  const generateWeightArray = () => {
    const initialWeights = Array(daysInMonth).fill(null);
    const today = new Date();
    const weights = totalWeightArray.reduce((acc, entry) => {
      const day = new Date(entry.date).getDate() - 1;
      acc[day] = entry.weight;
      return acc;
    }, initialWeights);
    for (let i = 1; i < weights.length; i++) {
      if (weights[i] === null) {
        weights[i] = weights[i - 1];
      }
    }
    for (let i = today.getDate(); i < weights.length; i++) {
      weights[i] = null;
    }
    const result = weights.map((value) => (value === null ? '-' : value));
    return result;
  };

  return (
    <GraphContainer className="scroll-container">
      <div className="weightTitle">
        <h2 className="graphTitle">Weight</h2>
        <h3 className="graphValue">
          Average value:
          <span className="weightValue"> {getAvarageWeight()}</span>
        </h3>
      </div>
      <ChartContainer className="weight-graph-line">
        <div className="table-container">
          <div className="upper-row">
            {generateWeightArray()?.map((value, index) => (
              <div key={index} className="table-cell upper">
                {value}
              </div>
            ))}
          </div>
          <div className="lower-row">
            {daysOfMonthArray.map((value, index) => (
              <div key={index} className="table-cell lower">
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
