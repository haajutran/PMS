import React from "react";
import { Menu, Icon, Table, Divider, Tag } from "antd";

const columns = [
  {
    title: "Description",
    dataIndex: "name",
    key: "name",
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: "Type",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Total",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "16/9",
    dataIndex: "16/9",
    key: "16/9"
  },
  {
    title: "17/9",
    dataIndex: "16/9",
    key: "16/9"
  },
  {
    title: "18/9",
    dataIndex: "16/9",
    key: "16/9"
  },
  {
    title: "19/9",
    dataIndex: "16/9",
    key: "16/9"
  },
  {
    title: "20/9",
    dataIndex: "16/9",
    key: "16/9"
  },
  {
    title: "21/9",
    dataIndex: "16/9",
    key: "16/9"
  },
  {
    title: "22/9",
    dataIndex: "16/9",
    key: "16/9"
  },
  {
    title: "23/9",
    dataIndex: "16/9",
    key: "16/9"
  },
  {
    title: "24/9",
    dataIndex: "16/9",
    key: "16/9"
  },
  {
    title: "25/9",
    dataIndex: "16/9",
    key: "16/9"
  },
  {
    title: "26/9",
    dataIndex: "16/9",
    key: "16/9"
  },
  {
    title: "27/9",
    dataIndex: "16/9",
    key: "16/9"
  },
  {
    title: "28/9",
    dataIndex: "16/9",
    key: "16/9"
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
    "16/9": "2"
  },
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
    "16/9": "2"
  },
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
    "16/9": "2"
  },
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
    "16/9": "2"
  },
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
    "16/9": "2"
  },
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
    "16/9": "2"
  },
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
    "16/9": "2"
  },
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
    "16/9": "2"
  }
];

class Content extends React.Component {
  render() {
    return (
      <div>
        <Menu
          // onClick={this.handleClick}
          selectedKeys={[0]}
          mode="horizontal"
        >
          <Menu.Item key="search">
            <Icon type="search" />
            Search
          </Menu.Item>
          <Menu.Item key="sync">
            <Icon type="sync" />
            Refresh
          </Menu.Item>
          <Menu.Item key="form">
            <Icon type="form" />
            New Reservation
          </Menu.Item>
          <Menu.Item key="team">
            <Icon type="team" />
            New Group
          </Menu.Item>
          <Menu.Item key="team">
            <Icon type="team" />
            Hotel
          </Menu.Item>
          <Menu.Item key="team">
            <Icon type="team" />
            Occ Detail
          </Menu.Item>
          <Menu.Item key="team">
            <Icon type="team" />
            Rate Query
          </Menu.Item>
          <Menu.Item key="team">
            <Icon type="team" />
            Holding Room
          </Menu.Item>
          <Menu.Item key="team">
            <Icon type="team" />
            Quickly Reservation
          </Menu.Item>
          <Menu.Item key="team">
            <Icon type="team" />
            Special Statistic
          </Menu.Item>
        </Menu>
        <div className="content">
          <Table
            bordered
            columns={columns}
            dataSource={data}
            scroll={{ x: 1300 }}
          />
        </div>
      </div>
    );
  }
}

export default Content;
