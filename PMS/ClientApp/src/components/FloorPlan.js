import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators } from "../store/FloorPlan";
import {
  Tabs,
  Icon,
  Card,
  Row,
  Col,
  Form,
  Input,
  Checkbox,
  Button,
  Select
} from "antd";
const TabPane = Tabs.TabPane;
const { Meta } = Card;
const { Option } = Select;

class Room extends React.Component {
  render() {
    const { room } = this.props;
    const from = room.ngayDen;
    const to = room.ngayDi;
    const date = from + " - " + to;
    return (
      <Card
        title={room.loaiPhong}
        style={{ minWidth: 250 }}
        actions={[<Icon type="car" />, <Icon type="delete" />]}
        extra={
          <span style={{ fontSize: 20 }}>
            <b>{room.soPhong}</b> <Icon style={{ color: "red" }} type="alert" />
          </span>
        }
      >
        <Meta
          title={room.tenKhach !== "" ? room.tenKhach : "No Name"}
          description={date}
        />
      </Card>
    );
  }
}

class RoomPlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.ensureDataFetched();
  }

  // componentDidUpdate() {
  //   this.ensureDataFetched();
  // }

  ensureDataFetched() {
    this.props.requestSearchForm();
    this.props.requestFloorPlans();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    console.log(this.props);
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 12 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 }
      }
    };
    const { floorPlans, searchForm, isLoading } = this.props;
    console.log(searchForm);
    // console.log(floorPlans);
    return (
      <div className="content">
        {!isLoading ? (
          <Row gutter={16}>
            <Col lg={4} className="custom-form">
              <div className="title">
                <Icon type="filter" />
                Filter Information
              </div>
              <div className="form">
                <Form onSubmit={this.handleSubmit} className="no-valid-form">
                  <Form.Item {...formItemLayout} label="Information">
                    {getFieldDecorator("information")(<Input />)}
                  </Form.Item>
                  <Form.Item {...formItemLayout} label="Group Code">
                    {getFieldDecorator("groupCode")(<Input />)}
                  </Form.Item>
                  <Form.Item {...formItemLayout} label="Room No">
                    {getFieldDecorator("roomNo")(<Input />)}
                  </Form.Item>
                  <Form.Item {...formItemLayout} label="Building">
                    {getFieldDecorator("building")(
                      <Select placeholder="Building">
                        {searchForm.listBuilding &&
                          searchForm.listBuilding.map(item => (
                            <Option value={item.buildingID}>
                              {item.description}
                            </Option>
                          ))}
                      </Select>
                    )}
                  </Form.Item>
                  <Form.Item {...formItemLayout} label="Floor">
                    {getFieldDecorator("floor")(
                      <Select placeholder="Floor">
                        {searchForm.listFloor &&
                          searchForm.listFloor.map(item => (
                            <Option value={item.floorListID}>
                              {item.floorName}
                            </Option>
                          ))}
                      </Select>
                    )}
                  </Form.Item>
                  <Form.Item {...formItemLayout} label="Room Type">
                    {getFieldDecorator("roomType")(<Input />)}
                  </Form.Item>
                  <Form.Item {...formItemLayout} label="Attribute">
                    {getFieldDecorator("attribute")(
                      <Select placeholder="Room Attribute">
                        {searchForm.listAttribute &&
                          searchForm.listAttribute.map(item => (
                            <Option value={item.roomAttributeID}>
                              {item.description}
                            </Option>
                          ))}
                      </Select>
                    )}
                  </Form.Item>
                  <Form.Item {...formItemLayout} label="View">
                    {getFieldDecorator("view")(
                      <Select placeholder="View">
                        {searchForm.listView &&
                          searchForm.listView.map(item => (
                            <Option value={item.wingID}>
                              {item.description}
                            </Option>
                          ))}
                      </Select>
                    )}
                  </Form.Item>
                  <div className="actions1" style={{ marginTop: 20 }}>
                    <div className="btns">
                      <Button icon="delete" type="primary">
                        Clear
                      </Button>
                      <Button icon="search" type="primary">
                        Browse
                      </Button>
                    </div>
                  </div>
                </Form>
              </div>
            </Col>
            <Col lg={20}>
              <Tabs defaultActiveKey="1">
                <TabPane
                  tab={
                    <span>
                      <Icon type="appstore" />
                      ALL
                    </span>
                  }
                  key="1"
                >
                  <Row gutter={16}>
                    {floorPlans.map(item => (
                      <Col lg={8} xl={6} className="floorplan">
                        <Room room={item} />
                      </Col>
                    ))}
                  </Row>
                </TabPane>
                <TabPane
                  tab={
                    <span>
                      <Icon type="login" />
                      ARRIVAL TODAY
                    </span>
                  }
                  key="2"
                >
                  ARRIVAL TODAY
                </TabPane>
                <TabPane
                  tab={
                    <span>
                      <Icon type="home" />
                      IN-HOUSE
                    </span>
                  }
                  key="3"
                >
                  IN-HOUSE
                </TabPane>
                <TabPane
                  tab={
                    <span>
                      <Icon type="logout" />
                      DUE OUT
                    </span>
                  }
                  key="4"
                >
                  DUE OUT
                </TabPane>
                <TabPane
                  tab={
                    <span>
                      <Icon type="stop" />
                      OUT OF ORDER
                    </span>
                  }
                  key="5"
                >
                  OUT OF ORDER
                </TabPane>
                <TabPane
                  tab={
                    <span>
                      <Icon type="minus-circle" />
                      OOI
                    </span>
                  }
                  key="6"
                >
                  OOI
                </TabPane>
                <TabPane
                  tab={
                    <span>
                      <Icon type="gift" />
                      BIRTHDAY
                    </span>
                  }
                  key="7"
                >
                  BIRTHDAY
                </TabPane>
                <TabPane
                  tab={
                    <span>
                      <Icon type="star" />
                      VIP
                    </span>
                  }
                  key="8"
                >
                  VIP
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        ) : (
          <h4>Loading....</h4>
        )}
      </div>
    );
  }
}

const MainForm = Form.create()(RoomPlan);

export default connect(
  state => state.floorPlan,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(MainForm);
