import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/main";

const router = createHashRouter([
  {
    path: "/",
    element: <MainPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
