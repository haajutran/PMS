import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators } from "../store/FloorPlan";
import {
  Menu,
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
import ArrivalIcon from "../assets/images/FloorPlan/ArrivalTD.png";
import DueOutIcon from "../assets/images/FloorPlan/Dueout.png";
// const TabPane = Tabs.TabPane;
const { Meta } = Card;
const { Option } = Select;

const statuses = {
  Inhouse: "home",
  OOO: "stop",
  OOI: "minus-circle",
  ArrivalTD: "import",
  DoeOut: "export",
  BirthDay: "gift",
  VIP: "star"
};

class Room extends React.Component {
  getStatus = field => {
    var status = field.replace(".png", "");
    console.log(field);
    return statuses[status];
  };

  getColor = status => {
    if (status === "stsRoom_1.png") {
      return "yellow";
    } else if (status === "stsRoom_2.png") {
      return "red";
    } else {
      return "#0fe87a";
    }
  };

  render() {
    const { room } = this.props;
    const from = room.ngayDen;
    const to = room.ngayDi;
    const date = from + " - " + to;
    return (
      <Card
        title={room.loaiPhong}
        // style={{ minWidth: 250 }}
        actions={[
          <Icon type={this.getStatus(room.trangThaiKhach)} />,
          room.sinhNhat === true && <Icon type="gift" />,
          room.vip === 1 && <Icon type="star" />
        ]}
        extra={
          <span style={{ fontSize: 20 }}>
            <b>{room.soPhong}</b>{" "}
            <Icon
              style={{ color: `${this.getColor(room.trangThaiPhong)}` }}
              type="alert"
            />
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
    this.state = {
      currentTab: "All"
    };
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

  handleSearch = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.props.search(values);
      }
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  handleChangeTab = e => {
    this.setState({
      currentTab: e.key
    });
    this.props.form.resetFields();
    var field = {
      typeFolio: e.key
    };
    this.props.search(field);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    // console.log(this.props);
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
    const { currentTab } = this.state;
    const { floorPlans, searchForm, isLoading } = this.props;
    // console.log(searchForm);
    // console.log(floorPlans);
    return (
      <div className="content">
        {floorPlans && searchForm ? (
          <Row gutter={16}>
            <Col lg={6} xl={5} className="custom-form">
              <div className="title">
                <Icon type="filter" />
                Filter Information
              </div>
              <div className="form">
                <Form className="no-valid-form">
                  <Form.Item {...formItemLayout} label="Information">
                    {getFieldDecorator("guestInfor")(<Input />)}
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
                            <Option value={item.buildingCode}>
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
                            <Option value={item.floorNum}>
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
                      <Button
                        icon="delete"
                        type="primary"
                        onClick={() => this.handleReset()}
                      >
                        Clear
                      </Button>
                      <Button
                        icon="search"
                        type="primary"
                        onClick={() => this.handleSearch()}
                      >
                        Browse
                      </Button>
                    </div>
                  </div>
                </Form>
              </div>
            </Col>
            <Col lg={18} xl={19}>
              <Menu
                onClick={this.handleChangeTab}
                selectedKeys={[currentTab]}
                mode="horizontal"
                className="tab-menu"
              >
                <Menu.Item key="All">
                  <Icon type="appstore" />
                  ALL
                </Menu.Item>
                <Menu.Item key="Arrival">
                  <Icon type="import" />
                  ARRIVAL TODAY
                </Menu.Item>
                <Menu.Item key="InHouse">
                  <Icon type="home" />
                  IN-HOUSE
                </Menu.Item>
                <Menu.Item key="DoeOut">
                  <Icon type="export" />
                  DUE OUT
                </Menu.Item>
                <Menu.Item key="OOO">
                  <Icon type="stop" />
                  OUT OF ORDER
                </Menu.Item>
                <Menu.Item key="OOI">
                  <Icon type="minus-circle" />
                  OOI
                </Menu.Item>
                <Menu.Item key="BirthDay">
                  <Icon type="gift" />
                  BIRTHDAY
                </Menu.Item>
                <Menu.Item key="VIP">
                  <Icon type="star" />
                  VIP
                </Menu.Item>
              </Menu>
              <div>
                <Row gutter={16}>
                  {floorPlans &&
                    floorPlans.map(item => (
                      <Col lg={8} xl={6} className="floorplan">
                        <Room room={item} />
                      </Col>
                    ))}
                </Row>
              </div>
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
