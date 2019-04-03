import React from "react";
import { Row, Col, Icon } from "antd";

class TopMenu extends React.Component {
  render() {
    return (
      <Row type="flex" justify="center" className="top-menu">
        <Col
          lg={1}
          xs={2}
          className="item"
          style={{ borderRight: "1px solid #ddd" }}
        >
          <Row>
            <Col span={24}>
              <Icon type="sync" />
            </Col>
            <Col span={24} className="title">
              Refresh
            </Col>
          </Row>
        </Col>
        <Col lg={1} xs={2} className="item">
          <Row>
            <Col span={24}>
              <Icon type="interation" />
            </Col>
            <Col span={24} className="title">
              Change Reservation
            </Col>
          </Row>
        </Col>
        <Col lg={1} xs={2} className="item">
          <Row>
            <Col span={24}>
              <Icon type="info-circle" />
            </Col>
            <Col span={24} className="title">
              Information
            </Col>
          </Row>
        </Col>
        <Col
          lg={1}
          xs={2}
          className="item"
          style={{ borderRight: "1px solid #ddd" }}
        >
          <Row>
            <Col span={24}>
              <Icon type="team" />
            </Col>
            <Col span={24} className="title">
              List Group
            </Col>
          </Row>
        </Col>
        <Col lg={1} xs={2} className="item">
          <Row>
            <Col span={24}>
              <Icon type="plus-circle" />
            </Col>
            <Col span={24} className="title">
              New Reservation
            </Col>
          </Row>
        </Col>
        <Col lg={1} xs={2} className="item">
          <Row>
            <Col span={24}>
              <Icon type="copy" />
            </Col>
            <Col span={24} className="title">
              Copy Reservation
            </Col>
          </Row>
        </Col>
        <Col lg={1} xs={2} className="item">
          <Row>
            <Col span={24}>
              <Icon type="thunderbolt" />
            </Col>
            <Col span={24} className="title">
              Quickly Reservation
            </Col>
          </Row>
        </Col>
        <Col lg={1} xs={2} className="item">
          <Col span={24}>
            <Icon type="key" />
          </Col>
          <Col span={24} className="title">
            Walk In
          </Col>
        </Col>
        <Col lg={1} xs={2} className="item">
          <Row>
            <Col span={24}>
              <Icon type="login" />
            </Col>
            <Col span={24} className="title">
              Check In
            </Col>
          </Row>
        </Col>
        <Col lg={1} xs={2} className="item">
          <Row>
            <Col span={24}>
              <Icon type="close-circle" />
            </Col>
            <Col span={24} className="title">
              Cancel Reservation
            </Col>
          </Row>
        </Col>
        <Col lg={1} xs={2} className="item">
          <Row>
            <Col span={24}>
              <Icon type="close-circle" />
            </Col>
            <Col span={24} className="title">
              Cancel Check In
            </Col>
          </Row>
        </Col>
        <Col lg={1} xs={2} className="item">
          <Row>
            <Col span={24}>
              <Icon type="logout" />
            </Col>
            <Col span={24} className="title">
              Cancel Check Out
            </Col>
          </Row>
        </Col>
        <Col
          lg={1}
          xs={2}
          className="item"
          style={{ borderRight: "1px solid #ddd" }}
        >
          <Row>
            <Col span={24}>
              <Icon type="drag" />
            </Col>
            <Col span={24} className="title">
              Room Move
            </Col>
          </Row>
        </Col>
        <Col lg={1} xs={2} className="item">
          <Row>
            <Col span={24}>
              <Icon type="credit-card" />
            </Col>
            <Col span={24} className="title">
              Key Card
            </Col>
          </Row>
        </Col>
        <Col
          lg={1}
          xs={2}
          className="item"
          style={{ borderRight: "1px solid #ddd" }}
        >
          <Row>
            <Col span={24}>
              <Icon type="user" />
            </Col>
            <Col span={24} className="title">
              Guest Profile
            </Col>
          </Row>
        </Col>
        {/* <Col lg={1} xs={2} className="item">
          <Col span={24}>
            <Icon type="mail" />
          </Col>
          <Col span={24} className="title">
            Send Email
          </Col>
        </Col> */}
        <Col lg={1} xs={2} className="item">
          <Row>
            <Col span={24}>
              <Icon type="printer" />
            </Col>
            <Col span={24} className="title">
              Print REG Card
            </Col>
          </Row>
        </Col>
        {/* <Col lg={1} xs={2} className="item">
          <Col span={24}>
            <Icon type="file-done" />
          </Col>
          <Col span={24} className="title">
            Print Confirmation
          </Col>
        </Col> */}
        <Col lg={1} xs={2} className="item">
          <Row>
            <Col span={24}>
              <Icon type="red-envelope" />
            </Col>
            <Col span={24} className="title">
              Billing
            </Col>
          </Row>
        </Col>
        <Col lg={1} xs={2} className="item">
          <Row>
            <Col span={24}>
              <Icon type="select" />
            </Col>
            <Col span={24} className="title">
              Assign Room
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default TopMenu;
