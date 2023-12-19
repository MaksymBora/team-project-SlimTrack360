import { createSelector } from '@reduxjs/toolkit';

export const selectRecommended = (state) => state.recommended.items;

export const selectIsLoading = (state) => state.recommended.isLoading;

export const selectError = (state) => state.recommended.error;

export const selectTenItems = createSelector(
  [selectRecommended],
  (recommended) => {
    function getRandomItems(array, count) {
      const copiedArray = [...array];
      const shuffledArray = copiedArray.sort(() => Math.random() - 0.5);
      return shuffledArray.slice(0, count);
    }
    return getRandomItems(recommended, 10);
  }
);

export const selectFourItems = createSelector(
  [selectRecommended],
  (recommended) => {
    function getRandomItems(array, count) {
      const copiedArray = [...array];
      const shuffledArray = copiedArray.sort(() => Math.random() - 0.5);
      return shuffledArray.slice(0, count);
    }
    return getRandomItems(recommended, 4);
  }
);

export const selectTwoItems = createSelector(
  [selectRecommended],
  (recommended) => {
    function getRandomItems(array, count) {
      const copiedArray = [...array];
      const shuffledArray = copiedArray.sort(() => Math.random() - 0.5);
      return shuffledArray.slice(0, count);
    }
    return getRandomItems(recommended, 2);
  }
);
