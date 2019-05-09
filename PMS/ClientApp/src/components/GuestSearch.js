import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators } from "../store/ProfileSearch";
import TopMenu from "./GuestSearch/TopMenu";
import {
  Menu,
  Icon,
  Spin,
  Form,
  Row,
  Col,
  Select,
  Button,
  Input,
  message,
  Checkbox,
  Table,
  DatePicker
} from "antd";

const { RangePicker } = DatePicker;

const Option = Select.Option;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
const columns = [
  {
    title: "Profile Num",
    dataIndex: "iDcard"
  },
  {
    title: "Name",
    render: (text, record) => (
      <span>
        {record.lastName} {record.firstName}
      </span>
    )
  },
  {
    title: "Gender",
    dataIndex: "sex",
    render: (text, record) => <span>{text === true ? "Male" : "Female"}</span>
  },
  {
    title: "Title",
    dataIndex: "gTitleCode"
  },
  {
    title: "VIP",
    dataIndex: "viPcode"
  },
  {
    title: "Country",
    dataIndex: "gCountryCode"
  },
  {
    title: "Nationality",
    dataIndex: "nationalCode"
  },
  {
    title: "Visa No",
    dataIndex: "visaNo"
  },
  {
    title: "Passport No",
    dataIndex: "idPassportNo"
  },
  {
    title: "Email",
    dataIndex: "email"
  },
  {
    title: "Mobile",
    dataIndex: "mobi"
  }
];

class GuestSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRows: [],
      displaySearchForm: false,
      reserved: false
    };
  }
  componentDidMount() {
    this.props.requestGuestProfiles();
    this.props.requestSearchForm();
  }

  onChange(pagination, filters, sorter) {
    // console.log("params", pagination, filters, sorter);
  }

  handleChange = e => {
    this.setState({
      reserved: e.target.checked
    });
  };

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

  hendleEdit = () => {
    const { selectedRows } = this.state;

    if (selectedRows.length === 0 || selectedRows.length > 1) {
      message.warning("Select one profile to edit, please!");
    } else {
      const idg = selectedRows[0].idG;
      this.props.history.push(`/guestProfile/${idg}`);
    }
  };

  onSelectChange = selectedRowKeys => {
    this.setState({ selectedRowKeys });
  };

  render() {
    const { Reserved } = this.state;
    const { guestProfiles, searchGPForm, isLoading } = this.props;
    const { displaySearchForm } = this.state;
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        this.setState({
          selectedRows
        });
      }
    };
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 14 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10 }
      }
    };
    return (
      <div>
        <Menu
          // onClick={this.handleClick}
          selectedKeys={[0]}
          mode="horizontal"
        >
          <Menu.Item
            key="search"
            onClick={() => {
              const reverse = !displaySearchForm;
              this.setState({
                displaySearchForm: reverse
              });
            }}
          >
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

        <div className="content">
          {isLoading ? (
            <Spin className="loading-area" indicator={antIcon} />
          ) : (
            guestProfiles &&
            searchGPForm && (
              <Row gutter={16}>
                <Col
                  sm={24}
                  md={12}
                  xl={10}
                  className="custom-form"
                  style={{ display: displaySearchForm ? "" : "none" }}
                >
                  <div className="title">
                    <Icon type="filter" />
                    Filter Information
                  </div>
                  <div className="form">
                    <Form
                      onSubmit={this.handleSubmit}
                      className="no-valid-form"
                    >
                      <Form.Item {...formItemLayout} label="Maximum Record">
                        {getFieldDecorator("MaximumRecord")(<Input />)}
                      </Form.Item>
                      <Form.Item {...formItemLayout} label="Guest Information">
                        {getFieldDecorator("GuestInformation")(<Input />)}
                      </Form.Item>
                      <Form.Item {...formItemLayout} label="#Room">
                        {getFieldDecorator("Room")(<Input />)}
                      </Form.Item>
                      <Form.Item {...formItemLayout} label="Room Type">
                        {getFieldDecorator("RoomType")(<Input />)}
                      </Form.Item>
                      <Form.Item {...formItemLayout} label="Rate Code">
                        {getFieldDecorator("RateCode")(<Input />)}
                      </Form.Item>

                      <Form.Item {...formItemLayout} label="Market Segment">
                        {getFieldDecorator("MarketSegment")(<Input />)}
                      </Form.Item>
                      <Form.Item {...formItemLayout} label="Organization">
                        {getFieldDecorator("Organization")(<Input />)}
                      </Form.Item>
                      <Form.Item {...formItemLayout} label="Group Code">
                        {getFieldDecorator("GroupCode")(<Input />)}
                      </Form.Item>
                    </Form>
                    <div className="title">
                      <Icon type="filter" />
                      Booking Status
                    </div>
                    <Form
                      onSubmit={this.handleSubmit}
                      className="no-valid-form"
                    >
                      <Row>
                        <Col md={24} xl={12}>
                          <Form.Item>
                            {getFieldDecorator("Reserved")(
                              <Checkbox
                                value={this.state.reserved}
                                onChange={this.handleChange}
                              >
                                Reserved
                              </Checkbox>
                            )}
                          </Form.Item>
                        </Col>
                        <Col md={24} xl={12}>
                          <Form.Item>
                            {getFieldDecorator("InHouse")(
                              <Checkbox
                                value={this.state.reserved}
                                onChange={this.handleChange}
                              >
                                In House
                              </Checkbox>
                            )}
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={24} xl={12}>
                          <Form.Item>
                            {getFieldDecorator("Reserved")(
                              <Checkbox
                                value={this.state.reserved}
                                onChange={this.handleChange}
                              >
                                Expected Arrival
                              </Checkbox>
                            )}
                          </Form.Item>
                        </Col>
                        <Col md={24} xl={12}>
                          <Form.Item>
                            {getFieldDecorator("Reserved")(
                              <Checkbox
                                value={this.state.reserved}
                                onChange={this.handleChange}
                              >
                                Expected Departure
                              </Checkbox>
                            )}
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={24} xl={12}>
                          <Form.Item>
                            {getFieldDecorator("Reserved")(
                              <Checkbox
                                value={this.state.reserved}
                                onChange={this.handleChange}
                              >
                                Check-In Today
                              </Checkbox>
                            )}
                          </Form.Item>
                        </Col>
                        <Col md={24} xl={12}>
                          <Form.Item>
                            {getFieldDecorator("Reserved")(
                              <Checkbox
                                value={this.state.reserved}
                                onChange={this.handleChange}
                              >
                                Check-Out Today
                              </Checkbox>
                            )}
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={24} xl={12}>
                          <Form.Item>
                            {getFieldDecorator("Reserved")(
                              <Checkbox
                                value={this.state.reserved}
                                onChange={this.handleChange}
                              >
                                Cancel
                              </Checkbox>
                            )}
                          </Form.Item>
                        </Col>
                        <Col md={24} xl={12}>
                          <Form.Item>
                            {getFieldDecorator("Reserved")(
                              <Checkbox
                                value={this.state.reserved}
                                onChange={this.handleChange}
                              >
                                No Show
                              </Checkbox>
                            )}
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={24} xl={12}>
                          <Form.Item>
                            {getFieldDecorator("Reserved")(
                              <Checkbox
                                value={this.state.reserved}
                                onChange={this.handleChange}
                              >
                                Reservation On Date
                              </Checkbox>
                            )}
                          </Form.Item>
                        </Col>
                        <Col md={24} xl={12}>
                          <Form.Item>
                            {getFieldDecorator("Reserved")(
                              <Checkbox
                                value={this.state.reserved}
                                onChange={this.handleChange}
                              >
                                All Check Out
                              </Checkbox>
                            )}
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={24} xl={10}>
                          <Form.Item>
                            {getFieldDecorator("Reserved")(
                              <Checkbox
                                value={this.state.reserved}
                                onChange={this.handleChange}
                              >
                                Arrival Date
                              </Checkbox>
                            )}
                          </Form.Item>
                        </Col>
                        <Col md={24} xl={14}>
                          <RangePicker onChange={() => this.onChange()} />
                        </Col>
                      </Row>

                      <Row>
                        <Col md={24} xl={10}>
                          <Form.Item>
                            {getFieldDecorator("Reserved")(
                              <Checkbox
                                value={this.state.reserved}
                                onChange={this.handleChange}
                              >
                                Departure Date
                              </Checkbox>
                            )}
                          </Form.Item>
                        </Col>
                        <Col md={24} xl={14}>
                          <RangePicker onChange={() => this.onChange()} />
                        </Col>
                      </Row>
                      <Row>
                        <Col md={24} xl={10}>
                          <Form.Item>
                            {getFieldDecorator("Reserved")(
                              <Checkbox
                                value={this.state.reserved}
                                onChange={this.handleChange}
                              >
                                Reservation Date
                              </Checkbox>
                            )}
                          </Form.Item>
                        </Col>
                        <Col md={24} xl={14}>
                          <RangePicker onChange={() => this.onChange()} />
                        </Col>
                      </Row>
                      <Row>
                        <Col md={24} xl={10}>
                          <Form.Item>
                            {getFieldDecorator("Reserved")(
                              <Checkbox
                                value={this.state.reserved}
                                onChange={this.handleChange}
                              >
                                Cancel/No Show
                              </Checkbox>
                            )}
                          </Form.Item>
                        </Col>
                        <Col md={24} xl={14}>
                          <RangePicker onChange={() => this.onChange()} />
                        </Col>
                      </Row>
                      <Row>
                        <Col md={24} xl={10}>
                          <Form.Item>
                            {getFieldDecorator("Reserved")(
                              <Checkbox
                                value={this.state.reserved}
                                onChange={this.handleChange}
                              >
                                Trace Date
                              </Checkbox>
                            )}
                          </Form.Item>
                        </Col>
                        <Col md={24} xl={14}>
                          <RangePicker onChange={() => this.onChange()} />
                        </Col>
                      </Row>
                    </Form>
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
                  </div>
                </Col>
                <Col lg={24} xl={displaySearchForm ? 14 : 24}>
                  <Table
                    rowSelection={rowSelection}
                    scroll={{ x: 1300 }}
                    columns={columns}
                    dataSource={guestProfiles}
                    onChange={() => this.onChange()}
                    className="custom-table"
                    pagination={{ defaultPageSize: 50 }}
                  />
                </Col>
              </Row>
            )
          )}
        </div>
      </div>
    );
  }
}

const MainForm = Form.create({ name: "" })(GuestSearch);

export default connect(
  state => state.profileSearch,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(MainForm);
