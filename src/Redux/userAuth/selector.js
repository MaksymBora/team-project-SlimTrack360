export const selectIsLoggedIn = (state) => state.userAuth.isLoggedIn;

export const selectUser = (state) => state.userAuth.user;

export const selectIsRefreshing = (state) => state.userAuth.isRefreshing;
