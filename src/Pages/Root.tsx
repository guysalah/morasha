import MainNavigation from "../Components/MainNavigation";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";
import clientConfig from "../clientConfig";

function RootLayout() {
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
      <MainNavigation />
      <div style={{ paddingTop: "70px" }}></div>
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
