import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import News from "./pages/News.jsx";
import Fixtures from "./pages/Fixtures.jsx";
import Standings from "./pages/Standings.jsx";
import { TeamProvider } from "./context/TeamContext.jsx";

const urls = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/fixtures",
    element: <Fixtures />,
  },
  {
    path: "/standings",
    element: <Standings />,
  },
  {
    path: "/news",
    element: <News />,
  },
];
const paths = createBrowserRouter(urls);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TeamProvider>
      <RouterProvider router={paths} />
    </TeamProvider>
  </React.StrictMode>,
)
