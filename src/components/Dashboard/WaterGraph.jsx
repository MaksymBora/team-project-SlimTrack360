// src\components\Dashboard\WaterGraph.jsx

import { useSelector } from 'react-redux';
import { selectTotalWater } from '../../Redux/statisctics/selector';
import { Line } from 'react-chartjs-2';
import {
  commonOptions,
  commonXAxisOptions,
  waterYAxisOptions,
} from './GraphsConfig';
import { GraphContainer, ChartContainer } from './Styles/Graphs.styled';
import './Styles/MobStyles/mob.Graph.css';
import './Styles/TabletStyles/tab.Graph.css';
import './Styles/Graph.css';

const WaterGraph = () => {
  // Підписка на стор
  const totalWater = useSelector(selectTotalWater);
  // Створення labels з числами від 1 до 31
  const labels = Array.from({ length: 31 }, (_, i) => i + 1);

  if (!totalWater || totalWater.length === 0) {
    const randomData = {
      labels,
      datasets: [
        {
          label: '',
          data: Array.from({ length: 31 }, () =>
            Math.floor(Math.random() * 1000)
          ),
          borderColor: '#e3ffa8',
          borderWidth: 1,
          pointBackgroundColor: '#e3ffa8',
          pointRadius: 2,
          fill: false,
        },
      ],
    };

    return (
      <GraphContainer className="scroll-container">
        <div className="waterTitle">
          <h2 className="graphTitle">Water</h2>
          <h3 className="graphValue">
            Your data may appear here later after entry
          </h3>
        </div>
        <ChartContainer className="graph-line">
          <Line
            options={{
              ...commonOptions,
              scales: { x: commonXAxisOptions, y: waterYAxisOptions },
            }}
            data={randomData}
          />
        </ChartContainer>
      </GraphContainer>
    );
  }

  // Обчислення середньої кількості спожитої води
  const averageWater = totalWater
    ? Math.round(
        totalWater.reduce(
          (accumulator, current) => accumulator + current.water,
          0
        ) / totalWater.length
      )
    : 0;
  // Отримання числової частини дати (від 1 до 31)
  const extractDate = (dateString) => {
    const dateObj = new Date(dateString);
    return dateObj.getDate();
  };

  // Оновлений блок даних для графіка
  const chartData = {
    labels: labels.map((day) => day),
    datasets: [
      {
        label: 'Water Intake',
        data: labels.map((day) => {
          const waterIntake = totalWater.find(
            (item) => extractDate(item.date) === day
          );
          return waterIntake ? waterIntake.water : 0; // Заміна null на 0
        }),
        borderColor: '#e3ffa8',
        borderWidth: 1,
        pointBackgroundColor: '#e3ffa8',
        pointRadius: 2,
        fill: false,
        cubicInterpolationMode: 'monotone',
      },
    ],
  };

  return (
    <GraphContainer className="scroll-container">
      <div className="waterTitle">
        <h2 className="graphTitle">Water</h2>
        <h3 className="graphValue">
          Average value:
          <span className="waterValue">
            {!totalWater ? `0 ml` : `${averageWater || 0} ml`}
          </span>
        </h3>
      </div>
      <ChartContainer className="graph-line">
        <Line
          options={{
            ...commonOptions,
            scales: { x: commonXAxisOptions, y: waterYAxisOptions },
          }}
          data={chartData}
        />
      </ChartContainer>
    </GraphContainer>
  );
};

export default WaterGraph;
