import MainNavigation from "../Components/MainNavigation";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";
import clientConfig from "../clientConfig";
import TourFormPopUp from "../Components/TourFormPopUp";
import { useSelector } from "react-redux";

function RootLayout() {

  const tourFormPopUp = useSelector(
    (state: any) => state.mainSetting.tourFormPopUp
  );

  return (
    <>
      {clientConfig.backendUrl.includes("localhost") && (
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            zIndex: "1000",
            color: "white",
            backgroundColor: "#f45f5fd9",
            padding: "2px 10px",
            fontSize: "14px",
          }}
        >
          {clientConfig.backendUrl}
        </div>
      )}

      <ScrollToTop />
      {tourFormPopUp && <TourFormPopUp />}
      <MainNavigation />
      <div style={{ paddingTop: "70px" }}></div>
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
