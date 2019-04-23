import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators } from "../store/GuestSearch";
import TopMenu from "./GuestSearch/TopMenu";
import { Form } from "antd";

class GuestSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        <TopMenu />
      </div>
    );
  }
}

const MainForm = Form.create({ name: "normal_login" })(GuestSearch);

export default connect()(MainForm);
