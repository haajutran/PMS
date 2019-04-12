import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators } from "../store/ProfileSearch";

import moment from "moment";
// import TopMenu from "./GuestProfile/TopMenu";
// import Content from "./GuestProfile/Content";

class RoomPlan extends React.Component {
  render() {
    return (
      <div>
        <h2>asdasdasdas</h2>
      </div>
    );
  }
}

export default connect(
  state => state.profileSearch,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(RoomPlan);
