import React from "react";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "../store/ProfileSearch";
import TopMenu from "./GuestProfile/TopMenu";
import {
  Row,
  Col,
  Icon,
  Input,
  Form,
  Table,
  Button,
  Select,
  message,
  Menu,
  Spin
} from "antd";
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

class ProfileSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRows: [],
      displaySearchForm: false
    };
  }
  componentDidMount() {
    this.props.requestGuestProfiles();
    this.props.requestSearchForm();
  }

  onChange(pagination, filters, sorter) {
    // console.log("params", pagination, filters, sorter);
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
        sm: { span: 12 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 }
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
          <Menu.Item
            key="sync"
            onClick={() => {
              this.props.requestGuestProfiles();
            }}
          >
            <Icon type="sync" />
            Refresh
          </Menu.Item>
          <Menu.Item key="plus">
            <Link to="/guestProfile">
              <Icon type="plus" />
              Add
            </Link>
          </Menu.Item>
          <Menu.Item key="edit" onClick={() => this.hendleEdit()}>
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
        <div className="content">
          {isLoading ? (
            <Spin className="loading-area" indicator={antIcon} />
          ) : (
            guestProfiles &&
            searchGPForm && (
              <Row gutter={16}>
                <Col
                  lg={8}
                  xl={6}
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
                      <Form.Item {...formItemLayout} label="Guest Information">
                        {getFieldDecorator("GuestInformation")(<Input />)}
                      </Form.Item>
                      <Form.Item {...formItemLayout} label="Passport No">
                        {getFieldDecorator("PassportNo")(<Input />)}
                      </Form.Item>
                      <Form.Item {...formItemLayout} label="Visa No">
                        {getFieldDecorator("VisaNo")(<Input />)}
                      </Form.Item>
                      <Form.Item {...formItemLayout} label="Email">
                        {getFieldDecorator("Email")(<Input />)}
                      </Form.Item>
                      <Form.Item {...formItemLayout} label="Country">
                        {getFieldDecorator("Country")(
                          <Select>
                            {searchGPForm.countryList.map(item => (
                              <Option value={item.countryCode}>
                                {item.description}
                              </Option>
                            ))}
                          </Select>
                        )}
                      </Form.Item>
                      <Form.Item {...formItemLayout} label="VIP">
                        {getFieldDecorator("VIP")(
                          <Select>
                            {searchGPForm.vipList.map(item => (
                              <Option value={item.vipcode}>
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
                <Col lg={24} xl={displaySearchForm ? 18 : 24}>
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

const MainForm = Form.create({ name: "normal_login" })(ProfileSearch);

export default connect(
  state => state.profileSearch,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(MainForm);
