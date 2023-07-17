import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Terms from "./components/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/terms-conditions",
    element: <Terms />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);
