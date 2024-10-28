// reduxSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeUsers: '27/80',
  questionsAnswered: '3,298',
  avgSessionLength: '2m 34s',
  startingKnowledge: '64%',
  currentKnowledge: '86%',
  knowledgeGain: '+34%',
  activityData: [
    { month: 'Jan', value: 20 },
    { month: 'Feb', value: 40 },
    { month: 'Mar', value: 35 },
    { month: 'Apr', value: 65 },
    { month: 'May', value: 70 },
    { month: 'Jun', value: 70 },
    { month: 'Jul', value: 55 },
    { month: 'Aug', value: 25 },
    { month: 'Sep', value: 65 },
    { month: 'Oct', value: 75 },
    { month: 'Nov', value: 80 },
    { month: 'Dec', value: 95 },
  ],
};

const reduxSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    // Define actions if needed (e.g., update knowledge)
    updateActivityData(state, action) {
      state.activityData = action.payload;
    },
    // Add more actions as necessary
  },
});

export const { updateActivityData } = reduxSlice.actions;
export default reduxSlice.reducer;
