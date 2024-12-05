import MainNavigation from "../Components/MainNavigation";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";

function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <MainNavigation />
      <div style={{ paddingTop: "70px" }}></div>
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
