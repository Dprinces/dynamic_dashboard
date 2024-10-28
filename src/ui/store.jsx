import { configureStore } from '@reduxjs/toolkit';
import leaderboardReducer from '../components/features/leaderboardSlice';
import topicsReducer from '../components/features/topicsSlice';
import dashboardReducer from '../components/features/reduxSlice'

export const store = configureStore({
  reducer: {
    topics: topicsReducer,
    leaderboard: leaderboardReducer,
    dashboard: dashboardReducer,
   
  }
});

