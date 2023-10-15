import React from "react";
import SideBar from "../../components/bar/SideBar";
import NavBar from "../../components/bar/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        backgroundColor: "#F4F6F8",
        width: "100%",
        height: "2868px",
        paddingTop: "66px",
        paddingLeft: "304px",
      }}
    >
      <SideBar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <NavBar />
        <div style={{ padding: "25px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
