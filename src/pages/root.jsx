import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Articles from "./Articles";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/articles",
        element: <Articles />,
      },
    ],
  },
]);

export default router;
