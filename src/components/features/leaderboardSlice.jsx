import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  groups: [
    { name: 'Houston Facility', points: 52, correctPercentage: 97 },
    { name: 'Test Group', points: 52, correctPercentage: 95 },
    { name: 'Sales Leadership', points: 52, correctPercentage: 87 },
    { name: 'Northeast Region', points: 52, correctPercentage: 87 },
  ],
  individuals: [
    { name: 'Jesse Thomas', points: 637, correctPercentage: 98 },
    { name: 'Thisal Mathiyazhagan', points: 637, correctPercentage: 89 },
    { name: 'Helen Chuang', points: 637, correctPercentage: 88 },
    { name: 'Lura Silverman', points: 637, correctPercentage: 87 },
  ]
};

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {}
});

export const selectGroups = (state) => state.leaderboard.groups;
export const selectIndividuals = (state) => state.leaderboard.individuals;

export default leaderboardSlice.reducer;
