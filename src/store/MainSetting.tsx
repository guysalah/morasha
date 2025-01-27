import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface MainSettinState {
  isMobile: boolean;
  formSent: boolean;
  tourFormPopUp: boolean;
  tourFormSent: boolean;
  selectedTourName: string;
  selectedTourEmail: string;
  selectedTHillId: string;
}

const initialMainSettingStat: MainSettinState = {
  // isMobile acccible from customHook
  //import { useIsMobile } from "../utils/utils";
  isMobile: window.innerWidth < 769,
  formSent: false,
  tourFormPopUp: false,
  tourFormSent: false,
  selectedTourName: "",
  selectedTourEmail: "",
  selectedTHillId: "",
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
    setTourFormPopUp(state, action: PayloadAction<boolean>) {
      state.tourFormPopUp = action.payload;
    },
    setTourFormSent(state, action: PayloadAction<boolean>) {
      state.tourFormSent = action.payload;
    },
    setSelectedTourName(state, action: PayloadAction<string>) {
      state.selectedTourName = action.payload;
    },
    setSelectedTourEmail(state, action: PayloadAction<string>) {
      state.selectedTourEmail = action.payload;
    },
    setSelectedTHillId(state, action: PayloadAction<string>) {
      state.selectedTHillId = action.payload;
    },
  },
});

export const mainSettingActions = mainSettingSlice.actions;
export default mainSettingSlice.reducer;
