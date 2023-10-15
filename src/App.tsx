import React from "react";
import { RecoilRoot } from "recoil";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Setting from "./pages/setting/Setting";
import Log from "./pages/log/Log";
import Layout from "./pages/layout/Layout";
import Main from "./pages/main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "setting",
        element: <Setting />,
        children: [
          { path: "user", element: <></> },
          { path: "server", element: <></> },
        ],
      },
      {
        path: "log",
        element: <Log />,
      },
    ],
  },
]);

function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={router}></RouterProvider>
    </RecoilRoot>
  );
}

export default App;
