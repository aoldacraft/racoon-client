import React from "react";
import { RecoilRoot } from "recoil";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Setting from "./pages/setting/Setting";
import Log from "./pages/log/Log";
import Layout from "./pages/layout/Layout";
import Main from "./pages/main/Main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
        path: "/dashboard/:serviceName",
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
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RouterProvider router={router}></RouterProvider>
      </RecoilRoot>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
