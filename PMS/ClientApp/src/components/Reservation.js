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
  Checkbox,
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
    this.state = {
      checkNick: false
    };
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
                  })(<TextArea placeholder="Res.Notice" rows={19} />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Market Segment">
                  {getFieldDecorator("merketSegment", {
                    rules: [{}]
                  })(<Input placeholder="Market Segment" />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Abc">
                  {getFieldDecorator("abc", {
                    rules: [{}]
                  })(<Input placeholder="Abc" />)}
                </Form.Item>
              </div>
            </Col>

            <Col md={24} xl={12}>
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
                    rules: []
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
                <Form.Item
                  {...formItemLayout}
                  label="Guest Type"
                  className="guest-type"
                >
                  <Row>
                    <Col span={8}>Adult</Col>
                    <Col span={8}>Child</Col>
                    <Col span={8}>Baby</Col>
                  </Row>
                </Form.Item>
                <Form.Item
                  {...formItemLayout}
                  label="Num Guest"
                  style={{ marginBottom: 0 }}
                >
                  <Row>
                    <Col span={8}>
                      <Form.Item
                        style={{
                          display: "inline-block",
                          width: "100%"
                        }}
                      >
                        {getFieldDecorator("guestTypeAdult", {
                          rules: []
                        })(
                          <InputNumber
                            min={0}
                            style={{
                              width: "100%"
                            }}
                          />
                        )}
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item
                        style={{
                          display: "inline-block",
                          width: "100%"
                        }}
                      >
                        {getFieldDecorator("guestTypeChild", {
                          rules: []
                        })(
                          <InputNumber
                            min={0}
                            style={{
                              width: "100%"
                            }}
                          />
                        )}
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item
                        style={{
                          display: "inline-block",
                          width: "100%"
                        }}
                      >
                        {getFieldDecorator("guestTypeBoby", {
                          rules: []
                        })(
                          <InputNumber
                            min={0}
                            style={{
                              width: "100%"
                            }}
                          />
                        )}
                      </Form.Item>
                    </Col>
                  </Row>
                </Form.Item>
                <Form.Item {...formItemLayout} label="Room Type Book">
                  {getFieldDecorator("roomTypeBook", {
                    rules: [
                      {
                        required: true,
                        message: "Please select room type book!"
                      }
                    ]
                  })(<Input placeholder="Room Type Book" />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Room Type Stay">
                  {getFieldDecorator("roomTypeStay", {
                    rules: [
                      {
                        required: true,
                        message: "Please select room type stay!"
                      }
                    ]
                  })(<Input placeholder="Room Type Stay" />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Room No">
                  {getFieldDecorator("roomNo", {
                    rules: [{}]
                  })(<Input placeholder="Room No" />)}
                </Form.Item>

                <Form.Item
                  {...formItemLayout}
                  label="Rate Code"
                  style={{ marginBottom: 0 }}
                >
                  <Row>
                    <Col span={8}>
                      <Form.Item
                        style={{
                          display: "inline-block",
                          width: "100%"
                        }}
                      >
                        {getFieldDecorator("rateCode", {
                          rules: [
                            {
                              required: true,
                              message: "Please input rate code!"
                            }
                          ]
                        })(
                          <InputNumber
                            min={0}
                            style={{
                              width: "100%"
                            }}
                          />
                        )}
                      </Form.Item>
                    </Col>
                    <Col span={4}>
                      <Form.Item
                        style={{
                          display: "inline-block",
                          width: "100%"
                        }}
                      >
                        {getFieldDecorator("currency", {
                          rules: []
                        })(
                          <Select
                            value={"VNĐ"}
                            style={{ width: "100%" }}
                            // onChange={this.handleCurrencyChange}
                          >
                            <Option value="VNĐ">VNĐ</Option>
                            <Option value="Dollar">Dollar</Option>
                          </Select>
                        )}
                      </Form.Item>
                    </Col>
                    <Col span={4}>
                      <Form.Item
                        style={{
                          display: "inline-block",
                          width: "100%"
                        }}
                      >
                        {getFieldDecorator("title", {
                          rules: []
                        })(<Input />)}
                      </Form.Item>
                    </Col>
                    <Col span={7} offset={1}>
                      <Form.Item
                        style={{
                          display: "inline-block",
                          width: "100%"
                        }}
                      >
                        {getFieldDecorator("nicknameRequired", {
                          rules: []
                        })(
                          <Checkbox
                            checked={this.state.checkNick}
                            onChange={this.handleChangeNicknameRequired}
                          >
                            Nickname is required
                          </Checkbox>
                        )}
                      </Form.Item>
                    </Col>
                  </Row>
                </Form.Item>
                <Form.Item
                  {...formItemLayout}
                  label="Rate Amount"
                  style={{ marginBottom: 0 }}
                >
                  <Row>
                    <Col span={19}>
                      <Form.Item
                        style={{
                          display: "inline-block",
                          width: "100%"
                        }}
                      >
                        {getFieldDecorator("rateCode", {
                          rules: [
                            {
                              required: true,
                              message: "Please input rate code!"
                            }
                          ]
                        })(
                          <InputNumber
                            min={0}
                            style={{
                              width: "100%"
                            }}
                          />
                        )}
                      </Form.Item>
                    </Col>

                    <Col span={4} offset={1}>
                      <Form.Item
                        style={{
                          display: "inline-block",
                          width: "100%"
                        }}
                      >
                        {getFieldDecorator("nett", {
                          rules: []
                        })(
                          <Checkbox
                            checked={this.state.checkNick}
                            onChange={this.handleChangeNicknameRequired}
                          >
                            NETT
                          </Checkbox>
                        )}
                      </Form.Item>
                    </Col>
                  </Row>
                </Form.Item>

                <Form.Item
                  {...formItemLayout}
                  label="Discount"
                  style={{ marginBottom: 0 }}
                >
                  <Row>
                    <Col span={20}>
                      <Form.Item
                        style={{
                          display: "inline-block",
                          width: "100%"
                        }}
                      >
                        {getFieldDecorator("discount", {
                          rules: []
                        })(
                          <InputNumber
                            style={{
                              width: "100%"
                            }}
                            min={0}
                            formatter={value => `${value}%`}
                            parser={value => value.replace("%", "")}
                            onChange={() => this.onChange}
                          />
                        )}
                      </Form.Item>
                    </Col>

                    <Col span={4}>
                      <Form.Item
                        style={{
                          display: "inline-block",
                          width: "100%"
                        }}
                      >
                        {getFieldDecorator("currency", {
                          rules: []
                        })(<Input />)}
                      </Form.Item>
                    </Col>
                  </Row>
                </Form.Item>
                <Form.Item {...formItemLayout} label="Discount Reason">
                  {getFieldDecorator("discountReason", {
                    rules: [{}]
                  })(<Input placeholder="Discount Reason" />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Package Code">
                  {getFieldDecorator("packageCode", {
                    rules: [{}]
                  })(<Input placeholder="Package Code" />)}
                </Form.Item>

                <Form.Item {...formItemLayout} label="Start Date">
                  {getFieldDecorator("startDate", {})(
                    <DatePicker format="DD-MM-YYYY" />
                  )}
                </Form.Item>

                <Form.Item
                  {...formItemLayout}
                  label="Meal Code"
                  style={{ marginBottom: 0 }}
                >
                  <Row>
                    <Col span={12}>
                      <Form.Item
                        style={{
                          display: "inline-block",
                          width: "100%"
                        }}
                      >
                        {getFieldDecorator("mealCode", {
                          rules: []
                        })(<Input />)}
                      </Form.Item>
                    </Col>

                    <Col span={4}>
                      <Form.Item
                        style={{
                          display: "inline-block",
                          width: "100%"
                        }}
                      >
                        {getFieldDecorator("mealCode1", {
                          rules: []
                        })(
                          <InputNumber
                            min={0}
                            style={{
                              width: "100%"
                            }}
                          />
                        )}
                      </Form.Item>
                    </Col>
                    <Col span={4}>
                      <Form.Item
                        style={{
                          display: "inline-block",
                          width: "100%"
                        }}
                      >
                        {getFieldDecorator("mealCode2", {
                          rules: []
                        })(
                          <InputNumber
                            min={0}
                            style={{
                              width: "100%"
                            }}
                          />
                        )}
                      </Form.Item>
                    </Col>
                    <Col span={4}>
                      <Form.Item
                        style={{
                          display: "inline-block",
                          width: "100%"
                        }}
                      >
                        {getFieldDecorator("mealCode3", {
                          rules: []
                        })(
                          <InputNumber
                            min={0}
                            style={{
                              width: "100%"
                            }}
                          />
                        )}
                      </Form.Item>
                    </Col>
                  </Row>
                </Form.Item>

                <Form.Item {...formItemLayout} label="Payment Method">
                  {getFieldDecorator("paymentMethod", {
                    rules: [{}]
                  })(<Input placeholder="Payment Method" />)}
                </Form.Item>

                <Form.Item {...formItemLayout} label="Card Number">
                  {getFieldDecorator("cardNumber", {
                    rules: [{}]
                  })(<Input placeholder="Card Number" />)}
                </Form.Item>

                <Form.Item {...formItemLayout} label="Card Exp Date">
                  {getFieldDecorator("cardExpDate", {})(
                    <DatePicker format="DD-MM-YYYY" />
                  )}
                </Form.Item>

                <Form.Item {...formItemLayout} label="Number On Card">
                  {getFieldDecorator("numberOnCard", {
                    rules: [{}]
                  })(<Input placeholder="Number On Card" />)}
                </Form.Item>

                <Form.Item {...formItemLayout} label="CVV">
                  {getFieldDecorator("cvv", {
                    rules: []
                  })(<TextArea placeholder="CVV" rows={3} />)}
                </Form.Item>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
  handleChangeNicknameRequired = e => {
    this.setState(
      {
        checkNick: e.target.checked
      },
      () => {
        this.props.form.validateFields(["nickname"], { force: true });
      }
    );
  };
  onChange = value => {
    console.log("changed", value);
  };
}

const MainComponent = Form.create()(Reservation);

export default connect(
  state => state.reservation,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(MainComponent);
