import RootLayout from "./Pages/Root";
import HomePage, { loader as getSetting } from "./Pages/HomePage";
import About from "./Pages/About";
import Hills from "./Pages/Hills";
import HillPage from "./Pages/HillPage";

import Error from "./Pages/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      // { index: true, element: <HomePage />, loader: getSetting },
      { index: true, element: <HomePage /> },
      { path: "/about", element: <About /> },
      { path: "/hills", element: <Hills /> },
      { path: "/hills/:hillId", element: <HillPage /> },
      { path: "/gallery", element: <Hills /> },
      { path: "/tour-scedual", element: <Hills /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
