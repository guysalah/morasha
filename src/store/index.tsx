import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth";
import mainSettingReducer from "./MainSetting";
import linksReducer from "./Links";
import hillsReducer from "./Hills";
import hillReducer from "./Hill";

// Create the store
const store = configureStore({
  reducer: {
    mainSetting: mainSettingReducer,
    auth: authReducer,
    links: linksReducer,
    hills: hillsReducer,
    hill: hillReducer,
  },
});

export default store;
