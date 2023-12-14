import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ChartContainer = styled.div`
  margin: 20px 0;
`;

const Dashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState('current');

  const generateRandomData = () => {
    return Array.from({ length: 30 }, () => Math.floor(Math.random() * 1000));
  };

  const caloriesData = {
    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: 'Calories',
        data: generateRandomData(),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  // тут будуть аналогічні  для графіка води та зміни ваги

  return (
    <DashboardContainer>
      <h1>Dashboard</h1>
      <select
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      >
        <option value="current">Current Month</option>
        <option value="previous">Previous Month</option>
      </select>

      {/* Графік калорій */}
      <ChartContainer>
        <h2>Calories</h2>
        <Line data={caloriesData} />
        <p>
          Average value:{' '}
          {Math.round(
            caloriesData.datasets[0].data.reduce((acc, val) => acc + val, 0) /
              30
          )}{' '}
          calories
        </p>
      </ChartContainer>

      {/* тут будуть аналогічні секції для графіка води та зміни ваги */}
    </DashboardContainer>
  );
};

export default Dashboard;
