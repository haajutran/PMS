import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators } from "../../store/GuestProfile";
import {
  Row,
  Col,
  Input,
  Form,
  Select,
  Radio,
  message,
  DatePicker,
  InputNumber,
  Button,
  Checkbox,
  Switch
} from "antd";
import TextArea from "antd/lib/input/TextArea";

const { Option } = Select;
var newFields = {};
const GuestProfileForm = Form.create({
  name: "global_state",

  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    // console.log(props);

    return {
      LastName: Form.createFormField({
        ...props.LastName,
        value: props.LastName.value
      }),
      FirstName: Form.createFormField({
        ...props.FirstName,
        value: props.FirstName.value
      }),
      Sex: Form.createFormField({
        ...props.Sex,
        value: props.Sex.value
      }),
      GTitleCode: Form.createFormField({
        ...props.GTitleCode,
        value: props.GTitleCode.value
      }),
      VIPcode: Form.createFormField({
        ...props.VIPcode,
        value: props.VIPcode.value
      }),
       LanguegeCode: Form.createFormField({
        ...props.LanguegeCode,
        value: props.LanguegeCode.value
      })
    };
  },
  onValuesChange(_, values) {
    // console.log(values);
  }
})(props => {
  const { getFieldDecorator } = props.form;
  const { GPForm } = props;
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
      xl: { span: 6 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
      xl: { span: 18 }
    }
  };
  console.log(props.GPForm);
  return (
    <Form {...formItemLayout} className="custom-form">
      {GPForm && (
        <Row>
          <Col md={24} xl={10}>
            <h2>Guest Profile</h2>
            <Form.Item label="Last Name">
              {getFieldDecorator("LastName", {
                rules: [
                  {
                    required: true,
                    message: "Please input your Last Name!"
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="First Name">
              {getFieldDecorator("FirstName", {
                rules: []
              })(<Input />)}
            </Form.Item>
            <Form.Item {...formItemLayout} label="Gender">
              {getFieldDecorator("Sex", {
                rules: []
              })(<Switch defaultChecked={props.Sex.value} />)}
            </Form.Item>

            <Form.Item {...formItemLayout} label="Title">
              {getFieldDecorator("GTitleCode", {
                rules: []
              })(
                <Select placeholder="Title">
                  <Option value="">Select Title</Option>
                  {GPForm.titleList.map(item => (
                    <Option value={item.titleCode}>{item.title}</Option>
                  ))}
                </Select>
              )}
            </Form.Item>
            <Form.Item {...formItemLayout} label="VIP">
              {getFieldDecorator("VIPcode", {
                rules: []
              })(
                <Select placeholder="VIP">
                 <Option value="">Select VIP</Option>
                  {GPForm.vipList.map(item => (
                    <Option value={item.vipcode}>{item.description}</Option>
                  ))}
                </Select>
              )}
            </Form.Item>
            <Form.Item {...formItemLayout} label="Language">
              {getFieldDecorator("LanguegeCode", {
                rules: []
              })(
                <Select placeholder="Language">
                  <Option value="">Select Language</Option>
                  {GPForm.languageList.map(item => (
                    <Option value={item.languageCode}>{item.description}</Option>
                  ))}
                </Select>
              )}
            </Form.Item>
            <Form.Item {...formItemLayout} label="Country/Residence">
              {getFieldDecorator("cr", {
                rules: []
              })(
                <Select placeholder="Country/Residence">
                  <Option value="mr">Mr.</Option>
                  <Option value="mrs">Mrs.</Option>
                  <Option value="ms">Ms.</Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item {...formItemLayout} label="Nationality">
              {getFieldDecorator("Nationality", {
                rules: []
              })(
                <Select placeholder="Nationality">
                  <Option value="mr">Mr.</Option>
                  <Option value="mrs">Mrs.</Option>
                  <Option value="ms">Ms.</Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item label="Post Code">
              {getFieldDecorator("postCode", {
                rules: []
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Passport Type">
              {getFieldDecorator("passportType", {
                rules: []
              })(<Input />)}
            </Form.Item>
            <Form.Item label="ID/Passport No">
              {getFieldDecorator("idpassport", {
                rules: []
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Date of Birth">
              {getFieldDecorator("dob", {
                rules: []
              })(<DatePicker />)}
            </Form.Item>
            <Form.Item label="Age">
              {getFieldDecorator("age", {
                rules: []
              })(<InputNumber min={0} />)}
            </Form.Item>
            <Form.Item label="Place of Birth">
              {getFieldDecorator("pob", {
                rules: []
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Address 1">
              {getFieldDecorator("address1", {
                rules: []
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Address 2">
              {getFieldDecorator("address2", {
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
            <Form.Item label="Date of Expiry">
              {getFieldDecorator("doe", {
                rules: []
              })(<DatePicker />)}
            </Form.Item>

            <Form.Item label="Notice">
              {getFieldDecorator("Notice", {
                rules: []
              })(<TextArea />)}
            </Form.Item>
          </Col>
          <Col md={24} xl={10}>
            <h2>More Information</h2>
            <Form.Item label="Mobile">
              {getFieldDecorator("Mobile", {
                rules: [{}]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Tel">
              {getFieldDecorator("tel", {
                rules: [{}]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Email">
              {getFieldDecorator("Email", {
                rules: [
                  {
                    type: "email",
                    message: "The input is not valid E-mail!"
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Organization">
              {getFieldDecorator("Organization", {
                rules: [{}]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Address">
              {getFieldDecorator("Address", {
                rules: [{}]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="VAT Code">
              {getFieldDecorator("vatCode", {
                rules: [{}]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Card Number">
              {getFieldDecorator("cardNumber", {
                rules: [{}]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Date Expired">
              {getFieldDecorator("dateExpired", {
                rules: [{}]
              })(<DatePicker />)}
            </Form.Item>
            <Form.Item label="CVV">
              {getFieldDecorator("CVV", {
                rules: [{}]
              })(<Input />)}
            </Form.Item>
            <h2>More Information</h2>
            <Form.Item label="Visa Type">
              {getFieldDecorator("visaType", {
                rules: [{}]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Visa No">
              {getFieldDecorator("visaNo", {
                rules: [{}]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Date of Issue">
              {getFieldDecorator("doi", {
                rules: [{}]
              })(<Select />)}
            </Form.Item>
            <Form.Item label="Date of Expiry">
              {getFieldDecorator("doe", {
                rules: [{}]
              })(<Select />)}
            </Form.Item>
            <Form.Item label="Place of Issue">
              {getFieldDecorator("poi", {
                rules: [{}]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Entry Purpose">
              {getFieldDecorator("entryPurpose", {
                rules: [{}]
              })(<Select />)}
            </Form.Item>
            <Form.Item label="Date of Entry">
              {getFieldDecorator("doentry", {
                rules: [{}]
              })(<DatePicker />)}
            </Form.Item>
            <Form.Item label="Stay Until">
              {getFieldDecorator("stayUntil", {
                rules: [{}]
              })(<Select />)}
            </Form.Item>
            <Form.Item label="Port of Entry">
              {getFieldDecorator("poe", {
                rules: [{}]
              })(<Select />)}
            </Form.Item>
            <Form.Item label="Occupation">
              {getFieldDecorator("occupation", {
                rules: [{}]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Place of Work">
              {getFieldDecorator("pow", {
                rules: [{}]
              })(<Input />)}
            </Form.Item>
          </Col>
          {/* <Col md={24} xl={4}>
          <div className="actions1">
            <div className="btns">
              <Button icon="delete" type="primary">
                Clear
              </Button>
              <Button icon="search" type="primary">
                Browse
              </Button>
            </div>
            <Form.Item>
              {getFieldDecorator("blackList", {})(
                <Checkbox>Black list</Checkbox>
              )}
            </Form.Item>
          </div>
        </Col> */}
        </Row>
      )}
    </Form>
  );
});

class GuestProfile extends React.Component {
  constructor(props) {
    super(props);
    const { data } = props;
    this.updateFields(data);
    this.state = {
      fields: newFields
    };
  }

  componentDidMount() {
    this.props.requestGPForm();
  }

  updateFields = data => {
    newFields = {
      LastName: {
        value: ""
      },
      FirstName: {
        value: ""
      },
      Sex: {
        value: false
      },
      GTitleCode: {
        value: ""
      },
      VIPcode: {
        value: ""
      },
      LanguegeCode: {
        value: ""
      },
      GCountryCode: {
        value: ""
      },
      NationalCode: {
        value: ""
      },
      PostCode: {
        value: ""
      },
      IDPassportNo: {
        value: ""
      },
      Dateofbirth: {
        value: ""
      },
      Placeofbirth: {
        value: ""
      },
      Address1: {
        value: ""
      },
      Address2: {
        value: ""
      },
      DateofissueP: {
        value: ""
      },
      PlaceofissueP: {
        value: ""
      },
      NoticeG: {
        value: ""
      },
      Mobi: {
        value: ""
      },
      Tel: {
        value: ""
      },
      Email: {
        value: ""
      },
      CompanyGuest: {
        value: ""
      },
      CompanyAdd: {
        value: ""
      },
      VATCode: {
        value: ""
      },
      CreditCardNum: {
        value: ""
      },
      CreditCardExpireTime: {
        value: ""
      },
      CreditCardSecureCode: {
        value: ""
      },
      Visatype: {
        value: ""
      },
      VisaNo: {
        value: ""
      },
      DateofissueV: {
        value: ""
      },
      DateofexpiryV: {
        value: ""
      },
      PlaceofissueV: {
        value: ""
      },
      Entrypurpose: {
        value: ""
      },
      DateofEntry: {
        value: ""
      },
      Stayuntil: {
        value: ""
      },
      CheckpointV: {
        value: ""
      },
      Occupation: {
        value: ""
      },
      Placeofwork: {
        value: ""
      }
    };
    this.setState(({ fields }) => ({
      fields: { ...fields, ...newFields }
    }));
  };

  handleFormChange = changedFields => {
    this.setState(({ fields }) => ({
      fields: { ...fields, ...changedFields }
    }));
  };

  onSubmit = () => {
    this.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    });
  };
  render() {
    const { data, GPForm } = this.props;
    const fields = this.state.fields;
    return (
      <div>
        <GuestProfileForm
          {...fields}
          onChange={this.handleFormChange}
          ref={form => (this.form = form)}
          GPForm={GPForm}
        />
        <div style={{ textAlign: "center" }}>
          <Button onClick={this.onSubmit} type="primary">
            Save
          </Button>
        </div>
      </div>
    );
  }
}

const MainForm = Form.create()(GuestProfile);

export default connect(
  state => state.guestProfile,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(MainForm);
