import { createSlice } from "@reduxjs/toolkit";
interface MainSettinState {
  isMobile: boolean;
}

const initialMainSettingStat: MainSettinState = {
  isMobile: window.innerWidth < 769,
};

const mainSettingSlice = createSlice({
  name: "mainSetting",
  initialState: initialMainSettingStat,
  reducers: {
    updateIsMobile(state) {
      state.isMobile = window.innerWidth < 769;
    },
  },
});


export const mainSettingActions = mainSettingSlice.actions;
export default mainSettingSlice.reducer;
