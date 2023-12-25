// src\components\Dashboard\CaloriesGraph.jsx

import { useSelector } from 'react-redux';
import { selectTotalCalories } from '../../Redux/statisctics/selector';
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

const CaloriesGraph = () => {
  // Підписка на стор
  const totalCalories = useSelector(selectTotalCalories);
  if (!totalCalories || totalCalories.length === 0) {
    return (
      <GraphContainer className="scroll-container">
        <div className="caloriesTitle">
          <h2 className="graphTitle">Calories</h2>
          <h3 className="graphValue">No calories consumption data available</h3>
        </div>
        <ChartContainer className="graph-line">
          <Line
            options={{
              ...commonOptions,
              scales: { x: commonXAxisOptions, y: caloriesYAxisOptions },
            }}
            data={chartData}
          />
        </ChartContainer>
      </GraphContainer>
    );
  }

  // Обчислення середньої кількості спожитих калорій
  const averageCalories =
    totalCalories.length > 0
      ? Math.round(
          totalCalories.reduce(
            (accumulator, current) => accumulator + current.totalCalories,
            0
          ) / totalCalories.length
        )
      : 0;

  // Отримання числової частини дати (від 1 до 31)
  const extractDate = (dateString) => {
    const dateObj = new Date(dateString);
    return dateObj.getDate();
  };
  // Створення labels з числами від 1 до 31
  const labels = Array.from({ length: 31 }, (_, i) => i + 1);

  // Оновлений блок даних для графіка
  const chartData = {
    labels: labels.map((day) => day),
    datasets: [
      {
        label: 'Calories Intake',
        data: labels.map((day) => {
          const caloriesIntake = totalCalories.find(
            (item) => extractDate(item.date) === day
          );
          const caloriesValue = caloriesIntake
            ? caloriesIntake.totalCalories
            : 0;

          return caloriesValue;
        }),
        borderColor: '#e3ffa8',
        borderWidth: 1,
        pointBackgroundColor: '#e3ffa8',
        pointRadius: 2,
        fill: false,
      },
    ],
  };

  // Изменен блок проверки на наличие данных
  if (!totalCalories || totalCalories.length === 0) {
    // Рендерим график с нулевыми значениями за каждый день месяца
    return (
      <GraphContainer className="scroll-container">
        <div className="caloriesTitle">
          <h2 className="graphTitle">Calories</h2>
          <h3 className="graphValue">No calories consumption data available</h3>
        </div>
        <ChartContainer className="graph-line">
          <Line
            options={{
              ...commonOptions,
              scales: {
                x: commonXAxisOptions,
                y: { ...caloriesYAxisOptions, min: 0 },
              },
            }}
            data={chartData}
          />
        </ChartContainer>
      </GraphContainer>
    );
  }

  // Рендер графика с данными
  return (
    <GraphContainer className="scroll-container">
      <div className="caloriesTitle">
        <h2 className="graphTitle">Calories</h2>
        <h3 className="graphValue">
          Average value:
          <span className="caloriesValue">
            {!totalCalories ? `0 cal` : `${averageCalories || 0} cal`}
          </span>
        </h3>
      </div>
      <ChartContainer className="graph-line">
        <Line
          options={{
            ...commonOptions,
            scales: { x: commonXAxisOptions, y: caloriesYAxisOptions },
          }}
          data={chartData}
        />
      </ChartContainer>
    </GraphContainer>
  );
};

export default CaloriesGraph;
