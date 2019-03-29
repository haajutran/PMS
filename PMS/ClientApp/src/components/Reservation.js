import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators } from "../store/Reservation";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Form,
  Input,
  Icon,
  Button,
  Radio,
  Select,
  Switch,
  DatePicker,
  InputNumber
} from "antd";

const { Option } = Select;
const { TextArea } = Input;

class Reservation extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentDidUpdate() {}

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const fullLengthLayout = {
      wrapperCol: { span: 24 }
    };
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 }
    };
    const customLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 14 }
    };
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="custom-form">
          <Row gutter={24}>
            <Col md={24} xl={12}>
              <div className="organization-information">
                <h2>Organization Information</h2>

                <Form.Item {...formItemLayout} label="Organization">
                  {getFieldDecorator("organization", {
                    rules: [
                      {
                        required: true,
                        message: "Please input organization!"
                      }
                    ]
                  })(<Input placeholder="Organization" />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Show Rate">
                  {getFieldDecorator("switch", { valuePropName: "checked" })(
                    <Switch />
                  )}
                </Form.Item>
              </div>

              <div className="booker-information">
                <h2>Booker Information</h2>

                <Form.Item {...formItemLayout} label="Last Name">
                  {getFieldDecorator("lastName", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your last name!"
                      }
                    ]
                  })(<Input placeholder="Last Name" />)}
                </Form.Item>

                <Form.Item {...formItemLayout} label="First Name">
                  {getFieldDecorator("firstName", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your first name!"
                      }
                    ]
                  })(<Input placeholder="First Name" />)}
                </Form.Item>

                <Form.Item {...formItemLayout} label="Gender">
                  {getFieldDecorator("gender", {
                    rules: [
                      {
                        required: true,
                        message: "Please select your gender!"
                      }
                    ]
                  })(
                    <Radio.Group>
                      <Radio.Button value="male">Male</Radio.Button>
                      <Radio.Button value="female">Female</Radio.Button>
                    </Radio.Group>
                  )}
                </Form.Item>

                <Form.Item {...formItemLayout} label="Title">
                  {getFieldDecorator("title", {
                    rules: [
                      {
                        required: true,
                        message: "Please select your title!"
                      }
                    ]
                  })(
                    <Select placeholder="Title">
                      <Option value="mr">Mr.</Option>
                      <Option value="mrs">Mrs.</Option>
                      <Option value="ms">Ms.</Option>
                    </Select>
                  )}
                </Form.Item>

                <Form.Item {...formItemLayout} label="Email">
                  {getFieldDecorator("email", {
                    rules: [
                      { required: true, message: "Please input your email!" }
                    ]
                  })(<Input placeholder="Email" />)}
                </Form.Item>

                <Form.Item {...formItemLayout} label="Tel">
                  {getFieldDecorator("tel", {
                    rules: []
                  })(<Input placeholder="Tel" />)}
                </Form.Item>

                <Form.Item {...formItemLayout} label="Mobile">
                  {getFieldDecorator("mobile", {
                    rules: []
                  })(<Input placeholder="Mobile" />)}
                </Form.Item>

                <Form.Item {...formItemLayout} label="Book ID">
                  {getFieldDecorator("bookID", {
                    rules: []
                  })(<Input placeholder="Book ID" />)}
                </Form.Item>

                <Form.Item {...formItemLayout} label="Confirm Num">
                  {getFieldDecorator("confirmNum", {
                    rules: []
                  })(<Input placeholder="Confirm Num" />)}
                </Form.Item>

                {/* <Form.Item>
                  <Button type="primary" htmlType="submit" className="">
                    Save
                  </Button>
                </Form.Item> */}
              </div>

              <div className="addition-information">
                <h2>Addition Information</h2>
                <Form.Item {...formItemLayout} label="Res.Type">
                  {getFieldDecorator("resType", {
                    rules: [
                      {
                        required: true,
                        message: "Please select Res.Type!"
                      }
                    ]
                  })(
                    <Select placeholder="Res.Type">
                      <Option value="mr">FIT Guaranted</Option>
                      <Option value="mrs">FIT Guaranted 2</Option>
                      <Option value="ms">FIT Guaranted 3</Option>
                    </Select>
                  )}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Res.Notice">
                  {getFieldDecorator("resNotice", {
                    rules: []
                  })(<TextArea placeholder="Res.Notice" />)}
                </Form.Item>
              </div>
            </Col>
            <Col md={24} lg={12}>
              <div className="reservation-information">
                <h2>Revervation Information</h2>

                <Form.Item {...formItemLayout} label="Arrival Date">
                  {getFieldDecorator("arrivalDate", {
                    rules: [
                      {
                        required: true,
                        message: "Please select arrival date!"
                      }
                    ]
                  })(
                    <DatePicker
                      showTime
                      placeholder="Arrival Date"
                      format="DD-MM-YYYY HH:mm:ss"
                    />
                  )}
                </Form.Item>

                <Form.Item {...formItemLayout} label="Early Check in">
                  {getFieldDecorator("earlyCheckin", {})(<Switch />)}
                </Form.Item>

                <Form.Item {...formItemLayout} label="Night">
                  {getFieldDecorator("night", { initialValue: 1 })(
                    <InputNumber min={1} />
                  )}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Allotment">
                  {getFieldDecorator("allotment", {
                    rules: [
                      {
                        required: true,
                        message: "Please select arrival date!"
                      }
                    ]
                  })(<Input placeholder="Allotment" />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Rate of type">
                  {getFieldDecorator("rateoftype", {
                    rules: [
                      {
                        required: true,
                        message: "Please select rate of type!"
                      }
                    ]
                  })(
                    <Select placeholder="Rate of type">
                      <Option value="mr">Hotel</Option>
                      <Option value="mrs">Motel</Option>
                    </Select>
                  )}
                </Form.Item>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

const MainComponent = Form.create()(Reservation);

export default connect(
  state => state.reservation,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(MainComponent);
