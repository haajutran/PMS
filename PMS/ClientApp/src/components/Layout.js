import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon, Avatar } from "antd";
import NavMenu from "./NavMenu";
import ScrollArea from "react-scrollbar";
// import logo from "../assets/images/logo.png";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class MainLayout extends React.Component {
  state = {
    collapsed: false
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
                  <img src="https://lh3.googleusercontent.com/a_vD5pkTqyXy8VCGYwyu_JzaKBY7L-MtMmQx9qA8di9DljRp5ZfcgyQ38NprLXygIaiFGq9wLyZtz7idC-0kA31lYsWQmFxDnzsFH43HGotSvqWdNoEXmjtZHBWprEpCy2IAMZfD2KBNwlQAx2dk7azQLW5ARVWZlKSRVbxLxYKH6LUU6yzeCpgPWWSvMwm2yrarAdY9L8mWETiqJyiizqsCz4aDP9so5GRdAP7z4tdIP2mr8gwCrrHMI6KLTqE0J5_o6RvyzXEZRMdBPmRVX3l-r3UmHgP6FEmol-BZhrI8ZkDsTXM9E7WuoEyTOyJQQnYRn-m-ozT2Bc_VNROR3ZvQW2nZZxKnkm2Vipb47NN5m1m8YK98PEBJvU-ZSDa7Kfb69LBqMM4RqmkUFCoRlNMcq1PO-C_ndF715fLAudeZ7mkYP-gki5-ptFwOOXHzk7PacwT2TgsbLQX3szhem83Nlo3RnRIrndfr_SBxdzelbZNKMne7cq-iflwXf6lj7cDckDZ54yi2qph45fOcyfIoWaowdf3JG1HgQnvPf_EgOuN464BpE12ihIMxutULLV9CaWaH6VATSviI7yCqR9AeWQ4VD0Vmg0idoxLUwL9OevtfgzNTrqi2pJlvXeiiM_HXLbvKsfHMbq22cXccVZSxvBYrIpw=w221-h89-no" />
                </Link>
              )}
            </div>
            <ScrollArea>
              <NavMenu />
            </ScrollArea>
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
