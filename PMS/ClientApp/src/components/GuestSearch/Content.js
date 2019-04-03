import React from "react";
import { Row, Col, Icon, Input, Form, Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    filters: [
      {
        text: "Joe",
        value: "Joe"
      },
      {
        text: "Jim",
        value: "Jim"
      },
      {
        text: "Submenu",
        value: "Submenu",
        children: [
          {
            text: "Green",
            value: "Green"
          },
          {
            text: "Black",
            value: "Black"
          }
        ]
      }
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ["descend", "ascend"]
  },
  {
    title: "Age",
    dataIndex: "age",
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ["descend", "ascend"]
  },
  {
    title: "Address",
    dataIndex: "address",
    filters: [
      {
        text: "London",
        value: "London"
      },
      {
        text: "New York",
        value: "New York"
      }
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ["descend", "ascend"]
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park"
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park"
  }
];

class Content extends React.Component {
  onChange(pagination, filters, sorter) {
    console.log("params", pagination, filters, sorter);
  }

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
      <div className="content">
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
                <Form.Item {...formItemLayout} label="#Room">
                  {getFieldDecorator("a")(<Input />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Room Type">
                  {getFieldDecorator("a")(<Input />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Rate Code">
                  {getFieldDecorator("a")(<Input />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Market Segment">
                  {getFieldDecorator("a")(<Input />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Organization">
                  {getFieldDecorator("a")(<Input />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Group Code">
                  {getFieldDecorator("a")(<Input />)}
                </Form.Item>
              </Form>
            </div>
          </Col>
          <Col lg={20}>
            <Table
              columns={columns}
              dataSource={data}
              onChange={() => this.onChange()}
              className="custom-table"
            />
          </Col>
        </Row>
      </div>
    );
  }
}

const MainForm = Form.create({ name: "normal_login" })(Content);

export default MainForm;
