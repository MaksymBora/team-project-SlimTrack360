// src\components\Dashboard\GraphsConfig.js

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const gridColor = '#292928'; // Цвет сетки

export const commonXAxisOptions = {
  type: 'linear',
  position: 'bottom',
  min: 1,
  max: 31,
  ticks: {
    stepSize: 1,
  },
  grid: {
    color: gridColor, // Цвет сетки
    borderColor: gridColor, // Цвет линий сетки
    borderWidth: 0.5, // Толщина линий сетки
  },
};

export const commonLegendOptions = {
  position: 'top',
  display: false,
};

export const caloriesYAxisOptions = {
  type: 'linear',
  position: 'left',
  min: 0,
  max: 3000,
  ticks: {
    stepSize: 1000,
    callback: (value) => `${value / 1000}K`,
  },
  grid: {
    color: gridColor,
    borderColor: gridColor,
    borderWidth: 0.5,
  },
};

export const waterYAxisOptions = {
  type: 'linear',
  position: 'left',
  min: 0,
  max: 3000,
  ticks: {
    stepSize: 1000,
    callback: (value) => `${value / 1000}L`,
  },
  grid: {
    color: gridColor,
    borderColor: gridColor,
    borderWidth: 0.5,
  },
};

export const commonOptions = {
  responsive: true,
  scales: {
    x: commonXAxisOptions,
    y: caloriesYAxisOptions, // По умолчанию используем для Calories графика
  },
  plugins: {
    legend: commonLegendOptions,
    tooltip: {
      callbacks: {
        label: (context) => {
          const label = context.dataset.label || '';
          const value = context.parsed.y;
          return `${label}: ${value} ${getTooltipUnit(label)}`;
        },
      },
    },
  },
};

// Добавим функцию, которая возвращает правильную единицу измерения для всплывающей подсказки
function getTooltipUnit(label) {
  if (label === 'Calories') {
    return 'calories';
  } else if (label === 'Water') {
    return 'milliliters';
  }
  // Добавьте дополнительные проверки для других графиков, если необходимо
  return '';
}
