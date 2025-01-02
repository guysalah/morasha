import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Hill as HillType } from "../types/hill";


// Define the state type
export interface HillsState {
  hill: HillType;
}

// Initial state
const initialHillStat: HillsState = {
  hill: {} as HillType,
};

// Create the slice
const hillSlice = createSlice({
  name: "hill",
  initialState: initialHillStat,
  reducers: {
    updateHill(state, action: PayloadAction<HillType[]>) {
      state.hill = action.payload[0];
    },
  },
});

export const hillActions = hillSlice.actions;
export default hillSlice.reducer;
