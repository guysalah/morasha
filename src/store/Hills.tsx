import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Hill as HillType } from "../types/hill";


// Define the state type
export interface HillsState {
  hills: HillType[];
}

// Initial state
const initialHillsStat: HillsState = {
  hills: [],
};

// Create the slice
const hillsSlice = createSlice({
  name: "hills",
  initialState: initialHillsStat,
  reducers: {
    updateHills(state, action: PayloadAction<HillType[]>) {
      state.hills = action.payload;
    },
  },
});

export const hillsActions = hillsSlice.actions;
export default hillsSlice.reducer;
