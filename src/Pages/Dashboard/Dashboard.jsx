// src\Pages\Dashboard\Dashboard.jsx

// import React from 'react';
import {
  CaloriesGraph,
  WaterGraph,
  WeightGraph,
} from '../../components/Dashboard/index';
import SelectorContainer from '../../components/Dashboard/SelectorContainer';
import { DashboardContainer } from './Dashboard.styled';
import './Dashboard.styles.css';

export function Dashboard() {
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
