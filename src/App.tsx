import React from "react";
import { RecoilRoot } from "recoil";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Main from "./pages/main/Main";
import Setting from "./pages/setting/Setting";
import Log from "./pages/log/Log";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
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
