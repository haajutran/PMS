import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators } from "../store/Dashboard";
import { List, Card, Row, Col, Statistic } from "antd";

const excludes = [
  "Occupancy",
  "Renuenue",
  "PaymentAmount",
  "RoomOccuped",
  "hDate"
];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.requestDashboard();
  }

  render() {
    const { dashboard } = this.props;
    var keys;
    if (dashboard) {
      var temp = Object.keys(dashboard);
      keys = temp.filter(function(value, index, arr) {
        return !excludes.includes(value);
      });
    }

    return (
      <div className="dashboard">
        {dashboard && (
          <div>
            <Row gutter={16}>
              <Col lg={6} xl={4}>
                <Card
                  style={{
                    background:
                      "linear-gradient(to right, #aa4b6b, #6b6b83, #3b8d99)"
                  }}
                >
                  <Statistic
                    title="Occupancy"
                    className="short"
                    value={dashboard.Occupancy}
                  />
                </Card>
              </Col>
              <Col lg={6} xl={4}>
                <Card
                  style={{
                    background: "linear-gradient(to right, #8360c3, #2ebf91)"
                  }}
                >
                  <Statistic
                    title="Renuenue"
                    className="short"
                    value={dashboard.Renuenue}
                  />
                </Card>
              </Col>
              <Col lg={6} xl={4}>
                <Card
                  style={{
                    background: "linear-gradient(to right, #00b4db, #0083b0)"
                  }}
                >
                  <Statistic
                    title="PaymentAmount"
                    className="short"
                    value={dashboard.PaymentAmount}
                  />
                </Card>
              </Col>
              <Col lg={6} xl={4}>
                <Card
                  style={{
                    background: "linear-gradient(to right, #11998e, #38ef7d)"
                  }}
                >
                  <Statistic
                    title="RoomOccuped"
                    className="short"
                    value={dashboard.RoomOccuped}
                  />
                </Card>
              </Col>
            </Row>

            <List
              className="statistic"
              header={<div className="title">Statistic Detail</div>}
              // footer={<div>Footer</div>}
              bordered
              dataSource={keys}
              renderItem={key => (
                <List.Item>
                  <List.Item.Meta
                    title={key}
                    // description={item.email}
                  />
                  <div>{dashboard[key]}</div>
                </List.Item>
              )}
            />
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  state => state.dashboard,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Home);
