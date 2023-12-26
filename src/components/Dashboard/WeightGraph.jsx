import { GraphContainer, ChartContainer } from './Styles/Graphs.styled';
import { useSelector } from 'react-redux';
import {
  selectMonth,
  selectStatisticUser,
} from '../../Redux/statisctics/selector';

import './Styles/MobStyles/mob.Graph.css';
import './Styles/TabletStyles/tab.Graph.css';
import './Styles/Graph.css';
import { generateWeightArray } from '../../utils/weightGraph/generateWeightArray';
import { getAvarageWeight } from '../../utils/weightGraph/getAvarageWeight';
import { getNumberOfDaysInMonth } from '../../utils/weightGraph/getNumberOfDaysInMonth';
import { getPrevWeight } from '../../utils/weightGraph/getPrevWeight';
import { getMonthValue } from '../../utils/getMonthValue';

const WeightGraph = () => {
  let totalWeightArray;

  const user = useSelector(selectStatisticUser);
  const month = useSelector(selectMonth);
  const currentMonthNumber = getMonthValue(month);

  if (month) {
    totalWeightArray = user[month];
  }

  let prevWeight;

  if (user) {
    const allArray = Object.values(user)
      .filter((value) => Array.isArray(value) && value?.length > 0)
      .flat(1);

    prevWeight = getPrevWeight(allArray, currentMonthNumber)?.weight;
  }

  const isTotalWeightNull = !totalWeightArray || totalWeightArray?.length === 0;

  const numberOfDaysInMonth = getNumberOfDaysInMonth(month, '2023');
  const daysOfMonthArray = Array.from({ length: numberOfDaysInMonth }, (_, i) =>
    (i + 1).toString()
  );

  const weightsArr = isTotalWeightNull
    ? Array.from({ length: numberOfDaysInMonth }, () => prevWeight)
    : generateWeightArray(numberOfDaysInMonth, totalWeightArray, prevWeight);

  return (
    <GraphContainer className="scroll-container">
      <div className="weightTitle">
        <h2 className="graphTitle">Weight</h2>
        <h3 className="graphValue">
          Average value:
          <span className="weightValue">{getAvarageWeight(weightsArr)}</span>
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
