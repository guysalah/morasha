import { createSlice } from "@reduxjs/toolkit";

// Define the shape of the state
interface CounterState {
  counter: number;
}
// Define the initial state
const initialCounterState: CounterState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    incresment(state) {
      state.counter++;
    },
    decrecment(state) {
      state.counter--;
    },
    plusHandelerWithNumber(state, action) {
      state.counter = state.counter + action.payload;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
