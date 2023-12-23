import { useDispatch, useSelector } from 'react-redux';
import {
  CaloriesGraph,
  WaterGraph,
  WeightGraph,
} from '../../components/Dashboard/index';
import SelectorContainer from '../../components/Dashboard/SelectorContainer';
import { DashboardContainer } from './Dashboard.styled';
import './Dashboard.styles.css';
import { useEffect } from 'react';
import { getStatistics } from '../../Redux/statisctics/operations';
import { selectRequiredMonth } from '../../Redux/statisctics/selector';
import { getMonthValue } from '../../utils/getMonthValue';

export function Dashboard() {
  const requestedMonth = useSelector(selectRequiredMonth);
  const dispatch = useDispatch();

  useEffect(() => {
    const dateToday = {
      month: getMonthValue(requestedMonth),
    };

    dispatch(getStatistics(dateToday));
  }, [dispatch, requestedMonth]);

  return (
    <DashboardContainer>
      <SelectorContainer />
      <div className="caloriesWaterGraphs">
        <CaloriesGraph />
        <WaterGraph />
      </div>
      <WeightGraph />
    </DashboardContainer>
  );
}

export default Dashboard;
