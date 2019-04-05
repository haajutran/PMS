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
              <Icon type="plus" />
            </Col>
            <Col span={24} className="title">
              Add
            </Col>
          </Row>
        </Col>
        <Col lg={1} xs={2} className="item">
          <Row>
            <Col span={24}>
              <Icon type="edit" />
            </Col>
            <Col span={24} className="title">
              Edit
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
              <Icon type="stop" />
            </Col>
            <Col span={24} className="title">
              Cancel
            </Col>
          </Row>
        </Col>
        <Col lg={1} xs={2} className="item">
          <Row>
            <Col span={24}>
              <Icon type="swap" />
            </Col>
            <Col span={24} className="title">
              Merge
            </Col>
          </Row>
        </Col>
        <Col lg={1} xs={2} className="item">
          <Row>
            <Col span={24}>
              <Icon type="snippets" />
            </Col>
            <Col span={24} className="title">
              Search Duplicate
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default TopMenu;
