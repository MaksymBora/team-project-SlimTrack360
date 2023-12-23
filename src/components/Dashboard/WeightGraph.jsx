import { GraphContainer, ChartContainer } from './Styles/Graphs.styled';
import { useSelector } from 'react-redux';
import {
  selectMonth,
  selectTotalWeight,
} from '../../Redux/statisctics/selector';

import './Styles/MobStyles/mob.Graph.css';
import './Styles/TabletStyles/tab.Graph.css';
import './Styles/Graph.css';

const WeightGraph = () => {
  const totalWeightArray = useSelector(selectTotalWeight);
  const isTotalWeightNull = !totalWeightArray || totalWeightArray?.length === 0;
  const month = useSelector(selectMonth);

  const getDaysInMonth = (month, year) => {
    const date = new Date(
      year,
      new Date(Date.parse(month + ' 1, ' + year)).getMonth() + 1,
      0
    );
    return date.getDate();
  };

  const numberOfDaysInMonth = getDaysInMonth(month, '2023');

  const daysOfMonthArray = Array.from({ length: numberOfDaysInMonth }, (_, i) =>
    (i + 1).toString()
  );

  const generateWeightArray = (daysInMonth, totalWeightArray) => {
    const initialWeights = Array(daysInMonth).fill(null);

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

    const firstNonNullNumber = weights.find((value) => value !== null);

    const newArray = weights.map((value) =>
      value === null ? firstNonNullNumber : value
    );

    return newArray;
  };

  const weightsArr = isTotalWeightNull
    ? Array.from({ length: numberOfDaysInMonth }, () => '-')
    : generateWeightArray(numberOfDaysInMonth, totalWeightArray);

  const getAvarageWeight = () => {
    if (weightsArr.includes('-') || weightsArr.length === 0) return '-';

    const weightsSum = weightsArr?.reduce(
      (prevV, currentV) => prevV + currentV
    );

    return Math.round(weightsSum / weightsArr.length);
  };

  return (
    <GraphContainer className="scroll-container">
      <div className="weightTitle">
        <h2 className="graphTitle">Weight</h2>
        <h3 className="graphValue">
          Average value:
          <span className="weightValue">{getAvarageWeight()}</span>
        </h3>
      </div>
      <ChartContainer className="weight-graph-line">
        <div className="table-container">
          <div className="upper-row">
            {weightsArr.map((value, index) => (
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
