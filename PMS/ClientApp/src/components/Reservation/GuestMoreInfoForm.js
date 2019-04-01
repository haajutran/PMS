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
      <Row>
        <Col span={8}>
          <img
            style={{ width: "100%", height: 400 }}
            src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-9/55446943_929360724061608_4088998278144720896_o.jpg?_nc_cat=109&_nc_oc=AQlA_5J41JgHHdgqz-0WV2GTYzVWZp52tT_Fec-_dpkg2EiN2G7iogLxuSSqzRuxlxg&_nc_ht=scontent.fsgn2-4.fna&oh=0a08309ff4f21cdd877edeb8aff7111a&oe=5D3B1A91"
          />
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <Button icon="search" type="primary" style={{ marginRight: 10 }}>
              Browse
            </Button>
            <Button icon="reload" type="primary">
              Clear
            </Button>
          </div>
        </Col>
        <Col span={16}>
          <Form {...formItemLayout}>
            <Form.Item label="Language">
              {getFieldDecorator("l", {
                rules: []
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Nationallity">
              {getFieldDecorator("n", {
                rules: []
              })(<Input />)}
            </Form.Item>
            <Form.Item label="ID/Passport No">
              {getFieldDecorator("idn", {
                rules: []
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Date Of Birth">
              {getFieldDecorator("dob", {
                rules: []
              })(<DatePicker />)}
            </Form.Item>
            <Form.Item label="Age">
              {getFieldDecorator("a", {
                rules: []
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Place of Birth">
              {getFieldDecorator("pob", {
                rules: []
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Address 1">
              {getFieldDecorator("a1", {
                rules: []
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Address 2">
              {getFieldDecorator("a2", {
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
          </Form>
        </Col>
      </Row>
    );
  }
}

const MainForm = Form.create({ name: "register" })(GuestInfoForm);

export default MainForm;
