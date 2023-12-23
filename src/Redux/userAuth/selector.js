export const selectIsLoggedIn = (state) => state.userAuth.isLoggedIn;

export const selectUser = (state) => state.userAuth.user;

export const selectIsRefreshing = (state) => state.userAuth.user.isRefreshing;

export const selectCurrentWeight = (state) => state.userAuth.user.currentWeight;

export const selectAvatarurl = (state) => state.userAuth.user.avatarUrl;

export const selectdailyGoalCalories = (state) =>
  state.userAuth.user.dailyGoalCalories;

export const selectdailyGoalWater = (state) =>
  state.userAuth.user.dailyGoalWater;

export const selectDailyGoalCarbonohidrates = (state) =>
  state.userAuth.user.dailyGoalElements.carbonohidrates;

export const selectDailyGoalProtein = (state) =>
  state.userAuth.user.dailyGoalElements.protein;

export const selectDailyGoalFat = (state) =>
  state.userAuth.user.dailyGoalElements.fat;

export const selectToken = (state) => state.userAuth.token;

export const selectVerify = (state) => state.userAuth.user.verify;

export const selectStatus = (state) => state.userAuth.user.status;
