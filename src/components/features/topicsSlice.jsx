import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  weakestTopic: {
    title: 'Food Safety',
    progress: 74,
    color: '#FFBF1A',
    gradient: 'linear-gradient(143.13deg, rgb(255, 191, 26) 5.36%, rgb(255, 64, 128) 94.64%)',
  },
  strongestTopics: [
    {
      title: 'Covid Protocols',
      progress: 95,
      color: '#b7e1a3',
      gradient: 'linear-gradient(143.13deg, rgb(47, 234, 155) 5.36%, rgb(127, 221, 83) 94.64%)',
    },
    // Additional topics can be added here
  ],
};

const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {},
});

export const selectWeakestTopic = (state) => state.topics.weakestTopic;
export const selectStrongestTopics = (state) => state.topics.strongestTopics;
export default topicsSlice.reducer;
