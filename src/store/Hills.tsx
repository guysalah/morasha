import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the Hill type
export interface Hill {
  id: number;
  title: string;
  featuredImage: string;
}

// Define the state type
export interface HillsState {
  hills: Hill[];
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
    updateHills(state, action: PayloadAction<Hill[]>) {
      state.hills = action.payload;
    },
  },
});

export const hillsActions = hillsSlice.actions;
export default hillsSlice.reducer;
