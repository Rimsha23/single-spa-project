import React, { useState } from "react";
import {
  HomeFilled,
  InfoCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu,  } from "antd";
import {ConfigProvider} from "antd";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/navbar";
const { Sider, Header } = Layout;
type MenuItems = {
  label: string;
  link: string;
  icon: React.ReactNode;
};
const menuItems: MenuItems[] = [
  {
    label: "Home",
    link: "/",
    icon: <HomeFilled />,
  },
  {
    label: "About",
    link: "/about",
    icon: <InfoCircleOutlined />,
  },
  {
    label: "Contact",
    link: "#",
    icon: <HomeFilled />,
  },
  {
    label: "My Profile",
    link: "/profile",
    icon: <UserOutlined />,
  },
];

const PageLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Layout style={{ minHeight: "100vh", width: "35%" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{ backgroundColor: "white" }}
        >
          <div className="demo-logo-vertical" />
          <ConfigProvider
    theme={{
      token: {
      controlItemBgActive:'#1f1fc4',
      colorPrimary:'#ffff'
      },
    }}
  >
    
          <Menu theme="light" style={{ width:'100%'}} defaultSelectedKeys={["0"]} mode="inline">
            {menuItems.map((menu, index) => (
              <Menu.Item key={index} >
                <i style={{ paddingRight: "7px" }}>{menu.icon}</i>
                {collapsed ? " " : <label>{menu.label}</label>}
                <Link to={menu.link}></Link>
              </Menu.Item>
            ))}
          </Menu>
         
          </ConfigProvider>
        </Sider>
      </Layout>
    </div>
  );
};

export default PageLayout;
