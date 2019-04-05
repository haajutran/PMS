import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators } from "../store/ProfileSearch";
import TopMenu from "./GuestProfile/TopMenu";
import Content from "./GuestProfile/Content";

class ProfileSearch extends React.Component {
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
  state => state.profileSearch,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(ProfileSearch);
