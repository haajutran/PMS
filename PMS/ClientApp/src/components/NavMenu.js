import React from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";

const { SubMenu } = Menu;
const MenuItemGroup = Menu.ItemGroup;

export default class NavMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      keySelected: "reservation"
    };
  }
  componentDidMount() {}
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { keySelected } = this.state;

    return (
      <Menu mode="inline" selectedKeys={[keySelected]}>
        <MenuItemGroup key="g1" title="">
          <Menu.Item key="reservation">
            <Link to="/reservation">
              <Icon type="user" />
              <span className="nav-text">Reservation</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="roomavailability">
            <Link to="/roomavailability">
              <Icon type="bar-chart" />
              <span className="nav-text">Room Availability</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="salemarketing">
            <Link to="/roomavailability">
              <Icon type="shop" />
              <span className="nav-text">Sale Marketing</span>
            </Link>
          </Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup key="g2" title="">
          <Menu.Item key="organization">
            <Link to="/organization">
              <Icon type="shop" />
              <span className="nav-text">Organization</span>
            </Link>
          </Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup key="g3" title="">
          <Menu.Item key="guestsearch">
            <Link to="/guestSearch">
              <Icon type="search" />
              <span className="nav-text">Guest Search</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="guestProfile">
            <Link to="/profileSearch">
              <Icon type="upload" />
              <span className="nav-text">Guest Profile</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="hotelstatus">
            <Icon type="upload" />
            <span className="nav-text">Hotel Status</span>
          </Menu.Item>
          <Menu.Item key="roomstatus">
            <Icon type="upload" />
            <span className="nav-text">Room Status</span>
          </Menu.Item>
          <Menu.Item key="roomplan">
            <Link to="/roomplan">
              <Icon type="cloud-o" />
              <span className="nav-text">Room Plan</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="floorplan">
            <Icon type="appstore-o" />
            <span className="nav-text">Floor Plan</span>
          </Menu.Item>
          <Menu.Item key="cashier">
            <Icon type="team" />
            <span className="nav-text">Cashier</span>
          </Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup key="g4" title="">
          <Menu.Item key="conceirge">
            <Icon type="shop" />
            <span className="nav-text">Conceirge</span>
          </Menu.Item>
          <Menu.Item key="housekeeping">
            <Icon type="shop" />
            <span className="nav-text">House Keeping</span>
          </Menu.Item>
          <Menu.Item key="nightauditor">
            <Icon type="shop" />
            <span className="nav-text">Night Auditor</span>
          </Menu.Item>
          <Menu.Item key="mainternance">
            <Icon type="shop" />
            <span className="nav-text">Mainternance</span>
          </Menu.Item>
          <Menu.Item key="report">
            <Icon type="shop" />
            <span className="nav-text">Report</span>
          </Menu.Item>
        </MenuItemGroup>
      </Menu>
    );
  }
}
