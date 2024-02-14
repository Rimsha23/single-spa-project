import React, { useState } from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import { Link } from 'react-router-dom';
const { Content,Header, Footer} = Layout;

const  Home=()=>{
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    return (
        <div style={{display:'flex',width:'100%'}}>
<Layout>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Link to={'/'}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Link>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <h1 style={{fontStyle:'italic', color:'rgb(72, 72, 74)'}}>Welcome Rimsha !</h1>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
      </div>
    );
}
export default Home;