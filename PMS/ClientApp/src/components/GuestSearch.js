import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators } from "../store/GuestSearch";
import TopMenu from "./GuestSearch/TopMenu";
import Content from "./GuestSearch/Content";
import { Row, Col, Icon, Input, Form, Table, Button, Select } from "antd";
const Option = Select.Option;
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
    this.state = {};
  }
  componentDidMount() {
    this.props.requestSearchForm();
    this.props.requestGuestProfiles();
  }

  onChange(pagination, filters, sorter) {
    console.log("params", pagination, filters, sorter);
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

  render() {
    const { guestProfiles, searchGPForm } = this.props;
    console.log(searchGPForm);
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
        <TopMenu />
        <div className="content">
          {guestProfiles && searchGPForm && (
            <Row>
              <Col lg={4} className="custom-form">
                <div className="title">
                  <Icon type="filter" />
                  Filter Information
                </div>
                <div className="form">
                  <Form onSubmit={this.handleSubmit} className="no-valid-form">
                    <Form.Item {...formItemLayout} label="Maximum Record">
                      {getFieldDecorator("a")(<Input />)}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="Guest Information">
                      {getFieldDecorator("a")(<Input />)}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="Passport No">
                      {getFieldDecorator("a")(<Input />)}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="Visa No">
                      {getFieldDecorator("a")(<Input />)}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="Email">
                      {getFieldDecorator("a")(<Input />)}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="Country">
                      {getFieldDecorator("countrycode")(
                        <Select>
                          {searchGPForm.countryList.map(item => (
                            <Option value={item.countryCode}>
                              {item.countryCode}
                            </Option>
                          ))}
                        </Select>
                      )}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="Nationality">
                      {getFieldDecorator("a")(<Input />)}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="Organization">
                      {getFieldDecorator("a")(<Input />)}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="VIP">
                      {getFieldDecorator("vipcode")(
                        <Select>
                          {searchGPForm.vipList.map(item => (
                            <Option value={item.vipcode}>{item.vipcode}</Option>
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
              <Col lg={20}>
                <Table
                  columns={columns}
                  dataSource={guestProfiles}
                  onChange={() => this.onChange()}
                  className="custom-table"
                  pagination={{ defaultPageSize: 50 }}
                />
              </Col>
            </Row>
          )}
        </div>
      </div>
    );
  }
}

const MainForm = Form.create({ name: "normal_login" })(GuestSearch);

export default connect(
  state => state.guestSearch,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(MainForm);
