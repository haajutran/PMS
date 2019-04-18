import React from "react";
import { Icon, Menu } from "antd";
import { Link } from "react-router-dom";

class TopMenu extends React.Component {
  render() {
    return (
      <Menu
        // onClick={this.handleClick}
        selectedKeys={[0]}
        mode="horizontal"
      >
        <Menu.Item key="sync">
          <Icon type="sync" />
          Refresh
        </Menu.Item>
        <Menu.Item key="plus">
          <Link to="/guestProfile">
            <Icon type="plus" />
            Add
          </Link>
        </Menu.Item>
        <Menu.Item key="edit">
          <Icon type="edit" />
          Edit
        </Menu.Item>
        <Menu.Item key="cancel">
          <Icon type="stop" />
          Cancel
        </Menu.Item>
        <Menu.Item key="swap">
          <Icon type="swap" />
          Merge
        </Menu.Item>
        <Menu.Item key="snippets">
          <Icon type="snippets" />
          Search Duplicate
        </Menu.Item>
      </Menu>
      // <Row type="flex" justify="center" className="top-menu">
      //   <Col
      //     lg={1}
      //     xs={2}
      //     className="item"
      //     style={{ borderRight: "1px solid #ddd" }}
      //   >
      //     <Row>
      //       <Col span={24}>
      //         <Icon type="sync" />
      //       </Col>
      //       <Col span={24} className="title">
      //         Refresh
      //       </Col>
      //     </Row>
      //   </Col>
      //   <Col lg={1} xs={2} className="item">
      //     <Row>
      //       <Col span={24}>
      //         <Icon type="plus" />
      //       </Col>
      //       <Col span={24} className="title">
      //         Add
      //       </Col>
      //     </Row>
      //   </Col>
      //   <Col lg={1} xs={2} className="item">
      //     <Row>
      //       <Col span={24}>
      //         <Icon type="edit" />
      //       </Col>
      //       <Col span={24} className="title">
      //         Edit
      //       </Col>
      //     </Row>
      //   </Col>
      //   <Col
      //     lg={1}
      //     xs={2}
      //     className="item"
      //     style={{ borderRight: "1px solid #ddd" }}
      //   >
      //     <Row>
      //       <Col span={24}>
      //         <Icon type="stop" />
      //       </Col>
      //       <Col span={24} className="title">
      //         Cancel
      //       </Col>
      //     </Row>
      //   </Col>
      //   <Col lg={1} xs={2} className="item">
      //     <Row>
      //       <Col span={24}>
      //         <Icon type="swap" />
      //       </Col>
      //       <Col span={24} className="title">
      //         Merge
      //       </Col>
      //     </Row>
      //   </Col>
      //   <Col lg={1} xs={2} className="item">
      //     <Row>
      //       <Col span={24}>
      //         <Icon type="snippets" />
      //       </Col>
      //       <Col span={24} className="title">
      //         Search Duplicate
      //       </Col>
      //     </Row>
      //   </Col>
      // </Row>
    );
  }
}

export default TopMenu;
