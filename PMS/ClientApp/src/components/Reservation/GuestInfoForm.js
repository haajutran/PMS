import React from "react";
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
  Table,
  InputNumber,
  Tabs,
  Modal
} from "antd";

const { Option } = Select;

class GuestInfoForm extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
        lg: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
        lg: { span: 20 }
      }
    };
    return (
      <Form {...formItemLayout}>
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
        <Form.Item label="Guest Type">
          {getFieldDecorator("guestType")(
            <Radio.Group>
              <Radio value="a">Child</Radio>
              <Radio value="b">Baby</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item label="VIP">
          {getFieldDecorator("vip", {
            rules: []
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Gender">
          {getFieldDecorator("gender")(
            <Radio.Group>
              <Radio value="a">Male</Radio>
              <Radio value="b">Female</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item label="Title">
          {getFieldDecorator("title", {
            rules: []
          })(
            <Select placeholder="Please select Title">
              <Option value="red">Mr.</Option>
              <Option value="green">Mrs.</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="Email">
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "The input is not valid E-mail!"
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Tel">{getFieldDecorator("tel")(<Input />)}</Form.Item>
        <Form.Item label="Properties">
          {getFieldDecorator("properties")(<Input />)}
        </Form.Item>
        <Form.Item label="Guest Notice">
          {getFieldDecorator("guestNotice")(<Input />)}
        </Form.Item>
        <Form.Item label="Check In">
          {getFieldDecorator("checkIn")(<DatePicker />)}
        </Form.Item>
        <Form.Item label="Check Out">
          {getFieldDecorator("checkOut")(<DatePicker />)}
        </Form.Item>
      </Form>
    );
  }
}

const MainForm = Form.create({ name: "register" })(GuestInfoForm);

export default MainForm;
