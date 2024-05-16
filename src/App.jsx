// react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import MainLayout from "./layout/MainLayout";

// pages
import Home from "./pages/Home";
import Planet from "./pages/Planet";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/planet/:name",
          element: <Planet />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
