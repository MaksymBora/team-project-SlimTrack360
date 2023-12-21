export const selectIsLoggedIn = (state) => state.userAuth.isLoggedIn;

export const selectUser = (state) => state.userAuth.user;

export const selectIsRefreshing = (state) => state.userAuth.user.isRefreshing;

export const selectCurrentWeight = (state) => state.userAuth.user.currentWeight;

export const selectAvatarurl = (state) => state.userAuth.avatarUrl;

export const selectdailyGoalCalories = (state) =>
  state.userAuth.dailyGoalCalories;

export const selectdailyGoalWater = (state) => state.userAuth.dailyGoalWater;

export const selectDailyGoalCarbonohidrates = (state) =>
  state.userAuth.dailyGoalElements.carbonohidrates;

export const selectDailyGoalProtein = (state) =>
  state.userAuth.dailyGoalElements.protein;

export const selectDailyGoalFat = (state) =>
  state.userAuth.dailyGoalElements.fat;

export const selectToken = (state) => state.userAuth.token;
