import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators } from "../store/ProfileSearch";
import {
  Menu,
  Icon,
  Row,
  Col,
  Tag,
  Form,
  Input,
  Checkbox,
  DatePicker,
  Button
} from "antd";
import { Header, Table, Rating } from "semantic-ui-react";
import { element } from "prop-types";
const temp = [
  [
    "Room type",
    "Description",
    "16/09|1",
    "17/09",
    "18/09",
    "19/09",
    "20/09",
    "21/09",
    "22/09|1",
    "23/09|1",
    "24/09",
    "25/09",
    "26/09",
    "27/09",
    "28/09",
    "29/09|1",
    "30/09|1",
    "01/10",
    "02/10",
    "03/10",
    "04/10",
    "05/10",
    "06/10|1",
    "07/10|1",
    "08/10",
    "09/10",
    "10/10",
    "11/10",
    "12/10",
    "13/10|1",
    "14/10|1",
    "15/10"
  ],
  [
    "SUPD",
    "SUPERIOR DOUBLE ",
    "0",
    "1",
    "4",
    "0",
    "5",
    "11",
    "14",
    "19",
    "18",
    "17",
    "18",
    "18",
    "20",
    "19",
    "20",
    "19",
    "19",
    "13",
    "14",
    "14",
    "14",
    "17",
    "17",
    "17",
    "17",
    "0",
    "0",
    "0",
    "20",
    "16"
  ],
  [
    "SUPT",
    "SUPERIOR TWIN",
    "0",
    "0",
    "0",
    "0",
    "3",
    "3",
    "4",
    "4",
    "4",
    "4",
    "4",
    "4",
    "4",
    "2",
    "3",
    "3",
    "2",
    "2",
    "2",
    "2",
    "4",
    "4",
    "4",
    "4",
    "4",
    "4",
    "4",
    "4",
    "4",
    "4"
  ],
  [
    "DLXD",
    "DELUXE ",
    "1",
    "-1",
    "7",
    "1",
    "23",
    "24",
    "27",
    "36",
    "34",
    "34",
    "32",
    "34",
    "33",
    "38",
    "23",
    "21",
    "8",
    "7",
    "7",
    "17",
    "28",
    "28",
    "29",
    "30",
    "30",
    "-1",
    "0",
    "1",
    "32",
    "38"
  ],
  [
    "EXCS",
    "EXECUTIVE SUITE ",
    "1",
    "-1",
    "4",
    "7",
    "9",
    "10",
    "10",
    "11",
    "11",
    "11",
    "11",
    "11",
    "11",
    "11",
    "12",
    "12",
    "12",
    "12",
    "12",
    "12",
    "12",
    "12",
    "10",
    "10",
    "10",
    "10",
    "12",
    "12",
    "12",
    "12"
  ],
  [
    "PENH",
    "PENTHOUES ",
    "0",
    "0",
    "0",
    "0",
    "1",
    "2",
    "2",
    "3",
    "3",
    "3",
    "3",
    "3",
    "3",
    "4",
    "4",
    "4",
    "3",
    "3",
    "3",
    "3",
    "4",
    "4",
    "4",
    "4",
    "4",
    "4",
    "4",
    "4",
    "4",
    "4"
  ]
];
// var columns = [];
// var data = [
//   {
//     "1": "222"
//   }
// ];
// v
// temp[0].forEach(element => {
//   columns.push({
//     title: element,
//     dataIndex: "1",
//     key: "1"
//   });
// });

// console.log(columns);
const columns = [
  {
    title: "Description",
    dataIndex: "0",
    key: "0",
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: "Room Type",
    dataIndex: "name",
    key: "name"
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
    "0": "Superior Double",
    name: "SUPD",
    age: 22,
    address: 22,
    tags: ["nice", "developer"],
    "16/9": "2"
  },
  {
    key: "Superior Twin",
    name: "SUPT",
    age: 40,
    address: 40,
    tags: ["nice", "developer"],
    "16/9": "2"
  },
  {
    key: "Deluxe",
    name: "DLXD",
    age: 32,
    address: 32,
    tags: ["nice", "developer"],
    "16/9": "2"
  },
  {
    key: "Executive Suite",
    name: "EXCS",
    age: 12,
    address: 12,
    tags: ["nice", "developer"],
    "16/9": "2"
  },
  {
    key: "Penthouses",
    name: "PENH",
    age: 6,
    address: 6,
    tags: ["nice", "developer"],
    "16/9": "2"
  }
];

function onChange(date, dateString) {
  console.log(date, dateString);
}
class RoomAvailability extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromDate: false,
      guaranteed: false,
      holdRoom: false,
      noneGuaranteed: false,
      waitingList: false,
      dayUse: false,
      earlyCI: false,
      lateCO: false,
      ooo: false,
      ooi: false,
      allotment: false
    };
  }
  handleChangeValues = () => {
    console.log("sds");
  };

  getColumns() {
    return Object.keys(temp[0]).map(key => {
      return {
        Header: key,
        accessor: key
      };
    });
  }

  render() {
    const {
      fromDate,
      guaranteed,
      holdRoom,
      noneGuaranteed,
      waitingList,
      dayUse,
      earlyCI,
      lateCO,
      ooo,
      ooi,
      allotment
    } = this.state;
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

    const columns2 = this.getColumns();
    console.log(temp);
    var weekends = [];
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

        <Form onChange={this.handleChangeValues} style={{ margin: "10px 0" }}>
          <Row gutter={16} type="flex" justify="start">
            <Col>
              <DatePicker onChange={onChange} />
            </Col>
            {/* <Col>
              <Button>+15</Button>
              <Button>-15</Button>
            </Col> */}
            <Col style={{ marginTop: 5 }}>
              <Checkbox value={guaranteed} onChange={this.handleChange}>
                Guaranteed
              </Checkbox>
            </Col>
            <Col style={{ marginTop: 5 }}>
              <Checkbox value={guaranteed} onChange={this.handleChange}>
                Non Guaranteed
              </Checkbox>
            </Col>
            <Col style={{ marginTop: 5 }}>
              <Checkbox value={guaranteed} onChange={this.handleChange}>
                Waiting List
              </Checkbox>
            </Col>
            <Col style={{ marginTop: 5 }}>
              <Checkbox value={guaranteed} onChange={this.handleChange}>
                Day Use
              </Checkbox>
            </Col>
            <Col style={{ marginTop: 5 }}>
              <Checkbox value={guaranteed} onChange={this.handleChange}>
                Early C/I
              </Checkbox>
            </Col>
            <Col style={{ marginTop: 5 }}>
              <Checkbox value={guaranteed} onChange={this.handleChange}>
                Late C/O
              </Checkbox>
            </Col>
            <Col style={{ marginTop: 5 }}>
              <Checkbox value={guaranteed} onChange={this.handleChange}>
                OOO
              </Checkbox>
            </Col>
            <Col style={{ marginTop: 5 }}>
              <Checkbox value={guaranteed} onChange={this.handleChange}>
                OOI
              </Checkbox>
            </Col>
            <Col style={{ marginTop: 5 }}>
              <Checkbox value={guaranteed} onChange={this.handleChange}>
                Hold Room
              </Checkbox>
            </Col>
            <Col style={{ marginTop: 5 }}>
              <Checkbox value={guaranteed} onChange={this.handleChange}>
                Allotment
              </Checkbox>
            </Col>
          </Row>
        </Form>

        <div className="content">
          <Table celled padded className="smt-table">
            <Table.Header fullWidth>
              <Table.Row>
                {temp[0].map((element, i) => {
                  var isWeekend = false;
                  if (element.includes("|1")) {
                    weekends.push(i);
                    element = element.replace("|1", "");
                    isWeekend = true;
                  }
                  return (
                    <Table.HeaderCell
                      className={`${isWeekend && "weekend"} ${i === 1 &&
                        "res"}`}
                      singleLine
                    >
                      {element}
                    </Table.HeaderCell>
                  );
                })}
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {temp.map(
                (item, i) =>
                  i > 0 && (
                    <Table.Row>
                      {item.map((element, i) => (
                        <Table.Cell
                          className={weekends.includes(i) && "weekend"}
                          style={{ textAlign: `${i >= 2 ? "center" : ""}` }}
                        >
                          {element}
                        </Table.Cell>
                      ))}
                    </Table.Row>
                  )
              )}
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}

// const MainForm = Form.create({ name: "" })(RoomAvailability);

export default connect(
  state => state.profileSearch,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(RoomAvailability);
