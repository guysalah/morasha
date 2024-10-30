import { createSlice } from "@reduxjs/toolkit";
import clientConfig from "../clientConfig";

// Define the shape of the state
interface LinksState {
  logo: string;
}
// Define the initial state
const initialLinksState: LinksState = {
  logo: `${clientConfig.dbUrl}/wp-content/react_images/morasha_logo.svg`,
};

const linksSlice = createSlice({
  name: "links",
  initialState: initialLinksState,
  reducers: {},
});

export default linksSlice.reducer;
