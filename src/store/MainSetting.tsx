import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface MainSettinState {
  isMobile: boolean;
  formSent: boolean;
}

const initialMainSettingStat: MainSettinState = {
  // isMobile acccible from customHook
  //import { useIsMobile } from "../utils/utils";
  isMobile: window.innerWidth < 769,
  formSent: false,
};

const mainSettingSlice = createSlice({
  name: "mainSetting",
  initialState: initialMainSettingStat,
  reducers: {
    // window.addEventListener("resize") and updateIsMobile() are run from MainNavigation.tsx
    updateIsMobile(state) {
      state.isMobile = window.innerWidth < 769;
    },
    setFormSent(state, action: PayloadAction<boolean>) {
      state.formSent = action.payload;
    },
  },
});

export const mainSettingActions = mainSettingSlice.actions;
export default mainSettingSlice.reducer;
