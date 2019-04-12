import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon, Avatar } from "antd";
import NavMenu from "./NavMenu";
import logo from "../assets/images/logo.png";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class MainLayout extends React.Component {
  state = {
    collapsed: true
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <div>
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            className="left-menu"
            style={{
              height: "100vh",
              width: 250,
              position: "fixed",
              left: 0
            }}
          >
            <div className="logo">
              {!collapsed && (
                <Link to="/">
                  <img src={logo} />
                </Link>
              )}
            </div>
            <NavMenu />
          </Sider>
          <Layout style={{ marginLeft: collapsed ? 79 : 250 }}>
            <Header
              style={{
                background: "#99ced3",
                padding: "0 1em"
              }}
            >
              <span
                style={{
                  fontSize: 20,
                  float: "right",
                  color: "#fff",
                  marginLeft: 10
                }}
              >
                Hậu
              </span>
              <Avatar icon="user" style={{ marginTop: 15, float: "right" }} />
              <Icon
                className="trigger"
                type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                style={{
                  fontSize: 25,
                  color: "#fff"
                }}
                onClick={this.toggle}
              />

              <Icon
                type="message"
                style={{
                  fontSize: 25,
                  color: "#fff",
                  marginRight: 10,
                  float: "right",
                  marginTop: 18
                }}
              />
              <Icon
                type="bell"
                style={{
                  fontSize: 25,
                  color: "#fff",
                  marginRight: 10,
                  float: "right",
                  marginTop: 18
                }}
              />
              <Icon
                type="database"
                style={{
                  fontSize: 25,
                  color: "#fff",
                  marginRight: 20,
                  float: "right",
                  marginTop: 18
                }}
              />
            </Header>
            <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
              <div style={{ padding: 24, background: "#fff" }}>
                {this.props.children}
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default MainLayout;
