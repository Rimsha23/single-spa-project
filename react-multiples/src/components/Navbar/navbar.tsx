import React from "react";
import { Layout } from "antd";
const { Header } = Layout;
const Navbar: React.FC = () => {
  return (
    <div style={{ width: "100%" }}>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          backgroundColor:"white"
        }}
      ></Header>
    </div>
  );
};
export default Navbar;
