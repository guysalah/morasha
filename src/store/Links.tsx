import { createSlice } from "@reduxjs/toolkit";
import clientConfig from "../clientConfig";

// Define the shape of the state
interface LinksState {
  logoHorizontal: string;
  logoVertical: string;
  topImage: string;
  topImageMobile: string;

}
// Define the initial state
const initialLinksState: LinksState = {
  logoHorizontal: `${clientConfig.dbUrl}/wp-content/react_images/morasha_logo_horizontal.svg?v=1`,
  logoVertical: `${clientConfig.dbUrl}/wp-content/react_images/morasha_logo.svg?v=1`,
  topImage: `${clientConfig.dbUrl}/wp-content/react_images/topImage.jpg`,
  topImageMobile: `${clientConfig.dbUrl}/wp-content/react_images/topImageMobile.jpg`,
};

const linksSlice = createSlice({
  name: "links",
  initialState: initialLinksState,
  reducers: {},
});

export default linksSlice.reducer;
