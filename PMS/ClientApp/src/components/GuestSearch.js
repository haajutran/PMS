import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators } from "../store/GuestSearch";
import TopMenu from "./GuestSearch/TopMenu";
import Content from "./GuestSearch/Content";

class GuestSearch extends React.Component {
  render() {
    return (
      <div>
        <TopMenu />
        <Content />
      </div>
    );
  }
}

export default connect(
  state => state.guestSearch,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(GuestSearch);
