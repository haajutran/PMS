import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators } from "../store/FloorPlan";
import { Tabs, Icon, Card, Row, Col } from "antd";
const TabPane = Tabs.TabPane;
const { Meta } = Card;

class Room extends React.Component {
  render() {
    const { room } = this.props;
    const from = room.ngayDen;
    const to = room.ngayDi;
    const date = from + " - " + to;
    return (
      <Card
        title={room.loaiPhong}
        style={{ minWidth: 250 }}
        actions={[<Icon type="car" />, <Icon type="delete" />]}
        extra={
          <span style={{ fontSize: 20 }}>
            <b>{room.soPhong}</b> <Icon style={{ color: "red" }} type="alert" />
          </span>
        }
      >
        <Meta
          title={room.tenKhach !== "" ? room.tenKhach : "No Name"}
          description={date}
        />
      </Card>
    );
  }
}

class RoomPlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.ensureDataFetched();
  }

  // componentDidUpdate() {
  //   this.ensureDataFetched();
  // }

  ensureDataFetched() {
    this.props.requestFloorPlans();
  }

  render() {
    const { floorPlans, isLoading } = this.props;
    // console.log(floorPlans);
    return (
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <span>
                <Icon type="appstore" />
                ALL
              </span>
            }
            key="1"
          >
            <Row gutter={16}>
              {isLoading ? (
                <h2>......Loading...</h2>
              ) : (
                floorPlans.map(item => (
                  <Col xl={6} className="floorplan">
                    <Room room={item} />
                  </Col>
                ))
              )}
            </Row>
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="login" />
                ARRIVAL TODAY
              </span>
            }
            key="2"
          >
            ARRIVAL TODAY
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="home" />
                IN-HOUSE
              </span>
            }
            key="3"
          >
            IN-HOUSE
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="logout" />
                DUE OUT
              </span>
            }
            key="4"
          >
            DUE OUT
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="stop" />
                OUT OF ORDER
              </span>
            }
            key="5"
          >
            OUT OF ORDER
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="minus-circle" />
                OOI
              </span>
            }
            key="6"
          >
            OOI
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="gift" />
                BIRTHDAY
              </span>
            }
            key="7"
          >
            BIRTHDAY
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="star" />
                VIP
              </span>
            }
            key="8"
          >
            VIP
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default connect(
  state => state.floorPlan,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(RoomPlan);
