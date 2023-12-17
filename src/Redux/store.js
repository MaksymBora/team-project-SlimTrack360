import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { recommendedReducer } from './recommended/recommendedSlice';
import { authReducer } from './userAuth/userAuthSlice';
import foodIntakeReducer from './foodIntake/foodIntakeSlice';
import { waterIntakeReducer } from './waterIntake/waterIntakeSlice';
import { statisticsReducer } from './statisctics/statisticsSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    userAuth: persistReducer(persistConfig, authReducer),
    foodIntake: foodIntakeReducer,
    waterIntake: waterIntakeReducer,
    recommended: recommendedReducer,
    statistic: statisticsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
