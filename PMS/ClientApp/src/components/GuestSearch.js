import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators } from "../store/GuestSearch";
import TopMenu from "./GuestSearch/TopMenu";
import { Form, Menu, Icon } from "antd";

class GuestSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        <Menu
          // onClick={this.handleClick}
          selectedKeys={[0]}
          mode="horizontal"
        >
          <Menu.Item key="search">
            <Icon type="search" />
            Search
          </Menu.Item>
          <Menu.Item key="interation">
            <Icon type="interation" />
            Change Reservation
          </Menu.Item>
          <Menu.Item key="info-circle">
            <Icon type="info-circle" />
            Information
          </Menu.Item>
          <Menu.Item key="team">
            <Icon type="team" />
            List Group
          </Menu.Item>
          <Menu.Item key="plus-circle">
            <Icon type="plus-circle" />
            New Reservation
          </Menu.Item>
          <Menu.Item key="copy">
            <Icon type="copy" />
            Copy Reservation
          </Menu.Item>
          <Menu.Item key="thunderbolt">
            <Icon type="thunderbolt" />
            Quickly Reservation
          </Menu.Item>
          <Menu.Item key="key">
            <Icon type="key" />
            Walk In
          </Menu.Item>
          <Menu.Item key="login">
            <Icon type="login" />
            Check In
          </Menu.Item>
          <Menu.Item key="close-circle">
            <Icon type="close-circle" />
            Cancel Reservation
          </Menu.Item>
          <Menu.Item key="close-circle">
            <Icon type="close-circle" />
            Cancel Check In
          </Menu.Item>
          <Menu.Item key="logout">
            <Icon type="logout" />
            Cancel Check Out
          </Menu.Item>
          <Menu.Item key="drag">
            <Icon type="drag" />
            Room Move
          </Menu.Item>
          <Menu.Item key="credit-card">
            <Icon type="credit-card" />
            Key Card
          </Menu.Item>
          <Menu.Item key="user">
            <Icon type="user" />
            Guest Profile
          </Menu.Item>
          <Menu.Item key="printer">
            <Icon type="printer" />
            Print REG Card
          </Menu.Item>
          <Menu.Item key="red-envelope">
            <Icon type="red-envelope" />
            Billing
          </Menu.Item>
          <Menu.Item key="select">
            <Icon type="select" />
            Assign Room
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

const MainForm = Form.create({ name: "normal_login" })(GuestSearch);

export default connect()(MainForm);
