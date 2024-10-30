import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth";
import mainSettingReducer from "./MainSetting";
import linksReducer from "./Links";

// Create the store
const store = configureStore({
  reducer: {
    mainSetting: mainSettingReducer,
    auth: authReducer,
    links: linksReducer,
  },
});

export default store;
