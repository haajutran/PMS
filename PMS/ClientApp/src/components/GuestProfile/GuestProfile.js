import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators } from "../../store/GuestProfile";
import {
  Row,
  Col,
  Input,
  Form,
  Select,
  Radio,
  DatePicker,
  InputNumber,
  Button,
  Checkbox
} from "antd";

const { Option } = Select;

class GuestProfile extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
        xl: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
        xl: { span: 18 }
      }
    };
    return (
      <div>
        <Row>
          <Col md={24} xl={10}>
            <Form {...formItemLayout} className="custom-form">
              <h2>Guest Profile</h2>
              <Form.Item label="Last Name">
                {getFieldDecorator("lastName", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your Last Name!"
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="First Name">
                {getFieldDecorator("firstName", {
                  rules: []
                })(<Input />)}
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
              <Form.Item {...formItemLayout} label="VIP">
                {getFieldDecorator("VIP", {
                  rules: [
                    {
                      required: true,
                      message: "Please select your title!"
                    }
                  ]
                })(
                  <Select placeholder="VIP">
                    <Option value="mr">Mr.</Option>
                    <Option value="mrs">Mrs.</Option>
                    <Option value="ms">Ms.</Option>
                  </Select>
                )}
              </Form.Item>
              <Form.Item {...formItemLayout} label="Language">
                {getFieldDecorator("Language", {
                  rules: [
                    {
                      required: true,
                      message: "Please select your title!"
                    }
                  ]
                })(
                  <Select placeholder="Language">
                    <Option value="mr">Mr.</Option>
                    <Option value="mrs">Mrs.</Option>
                    <Option value="ms">Ms.</Option>
                  </Select>
                )}
              </Form.Item>
              <Form.Item {...formItemLayout} label="Country/Residence">
                {getFieldDecorator("cr", {
                  rules: [
                    {
                      required: true,
                      message: "Please select your title!"
                    }
                  ]
                })(
                  <Select placeholder="Country/Residence">
                    <Option value="mr">Mr.</Option>
                    <Option value="mrs">Mrs.</Option>
                    <Option value="ms">Ms.</Option>
                  </Select>
                )}
              </Form.Item>
              <Form.Item {...formItemLayout} label="Nationality">
                {getFieldDecorator("Nationality", {
                  rules: [
                    {
                      required: true,
                      message: "Please select your title!"
                    }
                  ]
                })(
                  <Select placeholder="Nationality">
                    <Option value="mr">Mr.</Option>
                    <Option value="mrs">Mrs.</Option>
                    <Option value="ms">Ms.</Option>
                  </Select>
                )}
              </Form.Item>
              <Form.Item label="Post Code">
                {getFieldDecorator("postCode", {
                  rules: []
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Passport Type">
                {getFieldDecorator("passportType", {
                  rules: []
                })(<Input />)}
              </Form.Item>
              <Form.Item label="ID/Passport No">
                {getFieldDecorator("idpassport", {
                  rules: []
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Date of Birth">
                {getFieldDecorator("dob", {
                  rules: []
                })(<DatePicker />)}
              </Form.Item>
              <Form.Item label="Age">
                {getFieldDecorator("age", {
                  rules: []
                })(<InputNumber min={0} />)}
              </Form.Item>
              <Form.Item label="Place of Birth">
                {getFieldDecorator("pob", {
                  rules: []
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Address 1">
                {getFieldDecorator("address1", {
                  rules: []
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Address 2">
                {getFieldDecorator("address2", {
                  rules: []
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Date of Issue">
                {getFieldDecorator("doi", {
                  rules: []
                })(<DatePicker />)}
              </Form.Item>
              <Form.Item label="Place of Issue">
                {getFieldDecorator("poi", {
                  rules: []
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Date of Expiry">
                {getFieldDecorator("doe", {
                  rules: []
                })(<DatePicker />)}
              </Form.Item>
              <Form.Item label="Organization">
                {getFieldDecorator("Organization", {
                  rules: []
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Notice">
                {getFieldDecorator("Notice", {
                  rules: []
                })(<Input />)}
              </Form.Item>
            </Form>
          </Col>
          <Col md={24} xl={10}>
            <Form {...formItemLayout} className="custom-form">
              <h2>More Information</h2>
              <Form.Item label="Mobile">
                {getFieldDecorator("Mobile", {
                  rules: [{}]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Tel">
                {getFieldDecorator("tel", {
                  rules: [{}]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Email">
                {getFieldDecorator("Email", {
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid E-mail!"
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Organization">
                {getFieldDecorator("Organization", {
                  rules: [{}]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Address">
                {getFieldDecorator("Address", {
                  rules: [{}]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="VAT Code">
                {getFieldDecorator("vatCode", {
                  rules: [{}]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Card Number">
                {getFieldDecorator("cardNumber", {
                  rules: [{}]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Date Expired">
                {getFieldDecorator("dateExpired", {
                  rules: [{}]
                })(<DatePicker />)}
              </Form.Item>
              <Form.Item label="CVV">
                {getFieldDecorator("CVV", {
                  rules: [{}]
                })(<Input />)}
              </Form.Item>
              <h2>More Information</h2>
              <Form.Item label="Visa Type">
                {getFieldDecorator("visaType", {
                  rules: [{}]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Visa No">
                {getFieldDecorator("visaNo", {
                  rules: [{}]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Date of Issue">
                {getFieldDecorator("doi", {
                  rules: [{}]
                })(<Select />)}
              </Form.Item>
              <Form.Item label="Date of Expiry">
                {getFieldDecorator("doe", {
                  rules: [{}]
                })(<Select />)}
              </Form.Item>
              <Form.Item label="Place of Issue">
                {getFieldDecorator("poi", {
                  rules: [{}]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Entry Purpose">
                {getFieldDecorator("entryPurpose", {
                  rules: [{}]
                })(<Select />)}
              </Form.Item>
              <Form.Item label="Date of Entry">
                {getFieldDecorator("doentry", {
                  rules: [{}]
                })(<DatePicker />)}
              </Form.Item>
              <Form.Item label="Stay Until">
                {getFieldDecorator("stayUntil", {
                  rules: [{}]
                })(<Select />)}
              </Form.Item>
              <Form.Item label="Port of Entry">
                {getFieldDecorator("poe", {
                  rules: [{}]
                })(<Select />)}
              </Form.Item>
              <Form.Item label="Occupation">
                {getFieldDecorator("occupation", {
                  rules: [{}]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Place of Work">
                {getFieldDecorator("pow", {
                  rules: [{}]
                })(<Input />)}
              </Form.Item>
            </Form>
          </Col>
          <Col md={24} xl={4}>
            <div className="actions1">
              <div className="btns">
                <Button icon="delete" type="primary">
                  Clear
                </Button>
                <Button icon="search" type="primary">
                  Browse
                </Button>
              </div>
              <Form.Item>
                {getFieldDecorator("blackList", {})(
                  <Checkbox>Black list</Checkbox>
                )}
              </Form.Item>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const MainForm = Form.create()(GuestProfile);

export default connect(
  state => state.guestProfile,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(MainForm);
