import React, { Component } from "react";
import "../../assets/css/admin.css";
// import "antd/dist/antd.css";

import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;


class AdminWrapper extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 20px', marginTop: 80 }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 1000 }}>
        {this.props.children}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}></Footer>
  </Layout>
    );
  }
}

export default AdminWrapper;
