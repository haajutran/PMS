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
import moment from "moment";

const { Option } = Select;
const dateFormat = "DD/MM/YYYY";
var age = 0;
var newFields = {};
const GuestProfileForm = Form.create({
  name: "global_state",

  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
    if (changedFields.Dateofbirth) {
      var ddd = new Date();
      var dob = changedFields.Dateofbirth.value.toDate();
      age = moment().diff(dob, "years");
    }
  },
  mapPropsToFields(props) {
    // console.log(props);

    return {
      Idg: Form.createFormField({
        ...props.Idg,
        value: props.Idg.value
      }),
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
      }),
      GCountryCode: Form.createFormField({
        ...props.GCountryCode,
        value: props.GCountryCode.value
      }),
      NationalCode: Form.createFormField({
        ...props.NationalCode,
        value: props.NationalCode.value
      }),
      PostCode: Form.createFormField({
        ...props.PostCode,
        value: props.PostCode.value
      }),
      Passportypecode: Form.createFormField({
        ...props.Passportypecode,
        value: props.Passportypecode.value
      }),
      IDPassportNo: Form.createFormField({
        ...props.IDPassportNo,
        value: props.IDPassportNo.value
      }),
      Dateofbirth: Form.createFormField({
        ...props.Dateofbirth,
        value: props.Dateofbirth.value
      }),
      Placeofbirth: Form.createFormField({
        ...props.Placeofbirth,
        value: props.Placeofbirth.value
      }),
      Address1: Form.createFormField({
        ...props.Address1,
        value: props.Address1.value
      }),
      Address2: Form.createFormField({
        ...props.Address2,
        value: props.Address2.value
      }),
      DateofissueP: Form.createFormField({
        ...props.DateofissueP,
        value: props.DateofissueP.value
      }),
      PlaceofissueP: Form.createFormField({
        ...props.PlaceofissueP,
        value: props.PlaceofissueP.value
      }),
      Dateofexpiry: Form.createFormField({
        ...props.Dateofexpiry,
        value: props.Dateofexpiry.value
      }),
      NoticeG: Form.createFormField({
        ...props.NoticeG,
        value: props.NoticeG.value
      }),
      Mobi: Form.createFormField({
        ...props.Mobi,
        value: props.Mobi.value
      }),
      Tel: Form.createFormField({
        ...props.Tel,
        value: props.Tel.value
      }),
      Email: Form.createFormField({
        ...props.Email,
        value: props.Email.value
      }),
      CompanyGuest: Form.createFormField({
        ...props.CompanyGuest,
        value: props.CompanyGuest.value
      }),
      CompanyAdd: Form.createFormField({
        ...props.CompanyAdd,
        value: props.CompanyAdd.value
      }),
      VATCode: Form.createFormField({
        ...props.VATCode,
        value: props.VATCode.value
      }),
      CreditCardNum: Form.createFormField({
        ...props.CreditCardNum,
        value: props.CreditCardNum.value
      }),
      CreditCardExpireTime: Form.createFormField({
        ...props.CreditCardExpireTime,
        value: props.CreditCardExpireTime.value
      }),
      CreditCardSecureCode: Form.createFormField({
        ...props.CreditCardSecureCode,
        value: props.CreditCardSecureCode.value
      }),
      Visatype: Form.createFormField({
        ...props.Visatype,
        value: props.Visatype.value
      }),
      VisaNo: Form.createFormField({
        ...props.VisaNo,
        value: props.VisaNo.value
      }),
      DateofissueV: Form.createFormField({
        ...props.DateofissueV,
        value: props.DateofissueV.value
      }),
      DateofexpiryV: Form.createFormField({
        ...props.DateofexpiryV,
        value: props.DateofexpiryV.value
      }),
      PlaceofissueV: Form.createFormField({
        ...props.PlaceofissueV,
        value: props.PlaceofissueV.value
      }),
      Entrypurpose: Form.createFormField({
        ...props.Entrypurpose,
        value: props.Entrypurpose.value
      }),
      DateofEntry: Form.createFormField({
        ...props.DateofEntry,
        value: props.DateofEntry.value
      }),
      Stayuntil: Form.createFormField({
        ...props.Stayuntil,
        value: props.Stayuntil.value
      }),
      CheckpointV: Form.createFormField({
        ...props.CheckpointV,
        value: props.CheckpointV.value
      }),
      Occupation: Form.createFormField({
        ...props.Occupation,
        value: props.Occupation.value
      }),
      Placeofwork: Form.createFormField({
        ...props.Placeofwork,
        value: props.Placeofwork.value
      }),
      BlackList: Form.createFormField({
        ...props.BlackList,
        value: props.BlackList.value
      }),
      BlackListReason: Form.createFormField({
        ...props.BlackListReason,
        value: props.BlackListReason.value
      })
    };
  },
  onValuesChange(_, values) {}
})(props => {
  const { getFieldDecorator, getFieldValue } = props.form;
  const { GPForm } = props;
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
      xl: { span: 8 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
      xl: { span: 16 }
    }
  };
  return (
    <Form {...formItemLayout} className="custom-form">
      {GPForm && (
        <Row>
          <Col md={24} xl={12}>
            <h2>Guest Profile</h2>
            {getFieldValue("Idg") && (
              <Form.Item label="ID">
                {getFieldDecorator("Idg", {
                  rules: []
                })(<Input disabled />)}
              </Form.Item>
            )}

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
                    <Option value={item.languageCode}>
                      {item.description}
                    </Option>
                  ))}
                </Select>
              )}
            </Form.Item>
            <Form.Item {...formItemLayout} label="Country/Residence">
              {getFieldDecorator("GCountryCode", {
                rules: []
              })(
                <Select placeholder="Country/Residence">
                  <Option value="">Select Country</Option>
                  {GPForm.countryList.map(item => (
                    <Option value={item.countryCode}>{item.description}</Option>
                  ))}
                </Select>
              )}
            </Form.Item>
            <Form.Item {...formItemLayout} label="Nationality">
              {getFieldDecorator("NationalCode", {
                rules: []
              })(
                <Select placeholder="National">
                  <Option value="">Select National</Option>
                  {GPForm.countryList.map(item => (
                    <Option value={item.countryCode}>{item.description}</Option>
                  ))}
                </Select>
              )}
            </Form.Item>
            <Form.Item label="Post Code">
              {getFieldDecorator("PostCode", {
                rules: []
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Passport Type">
              {getFieldDecorator("Passportypecode", {
                rules: []
              })(<Input />)}
            </Form.Item>
            <Form.Item label="ID/Passport No">
              {getFieldDecorator("IDPassportNo", {
                rules: []
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Date of Birth">
              {getFieldDecorator("Dateofbirth", {
                rules: []
              })(<DatePicker format={dateFormat} />)}
            </Form.Item>
            <Form.Item label="Age">
              <InputNumber value={age} disabled />
            </Form.Item>
            <Form.Item label="Place of Birth">
              {getFieldDecorator("Placeofbirth", {
                rules: []
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Address 1">
              {getFieldDecorator("Address1", {
                rules: []
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Address 2">
              {getFieldDecorator("Address2", {
                rules: []
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Date of Issue">
              {getFieldDecorator("DateofissueP", {
                rules: []
              })(<DatePicker format={dateFormat} />)}
            </Form.Item>
            <Form.Item label="Place of Issue">
              {getFieldDecorator("PlaceofissueP", {
                rules: []
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Date of Expiry">
              {getFieldDecorator("Dateofexpiry", {
                rules: []
              })(<DatePicker format={dateFormat} />)}
            </Form.Item>

            <Form.Item label="Notice">
              {getFieldDecorator("NoticeG", {
                rules: []
              })(<TextArea />)}
            </Form.Item>
          </Col>
          <Col md={24} xl={12}>
            <h2>More Information</h2>
            <Form.Item label="Mobile">
              {getFieldDecorator("Mobi", {
                rules: [{}]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Tel">
              {getFieldDecorator("Tel", {
                rules: [{}]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Email">
              {getFieldDecorator("Email", {
                rules: [
                  {
                    type: "email",
                    message: "The input is not valid Email!"
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Organization">
              {getFieldDecorator("CompanyGuest", {
                rules: [{}]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Address">
              {getFieldDecorator("CompanyAdd", {
                rules: [{}]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="VAT Code">
              {getFieldDecorator("VATCode", {
                rules: [{}]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Card Number">
              {getFieldDecorator("CreditCardNum", {
                rules: [{}]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Date Expired">
              {getFieldDecorator("CreditCardExpireTime", {
                rules: []
              })(<DatePicker format={dateFormat} />)}
            </Form.Item>
            <Form.Item label="CVV">
              {getFieldDecorator("CreditCardSecureCode", {
                rules: [{}]
              })(<Input />)}
            </Form.Item>
            <h2>More Information</h2>
            <Form.Item label="Visa Type">
              {getFieldDecorator("Visatype", {
                rules: [{}]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Visa No">
              {getFieldDecorator("VisaNo", {
                rules: [{}]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Date of Issue">
              {getFieldDecorator("DateofissueV", {
                rules: []
              })(<DatePicker format={dateFormat} />)}
            </Form.Item>
            <Form.Item label="Date of Expiry">
              {getFieldDecorator("DateofexpiryV", {
                rules: []
              })(<DatePicker format={dateFormat} />)}
            </Form.Item>
            <Form.Item label="Place of Issue">
              {getFieldDecorator("PlaceofissueV", {
                rules: [{}]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Entry Purpose">
              {getFieldDecorator("Entrypurpose", {
                rules: [{}]
              })(
                <Select placeholder="Entry Purpose">
                  <Option value="">Select Entry Purpose</Option>
                  {GPForm.entryPurposeList.map(item => (
                    <Option value={item.purposeCode}>{item.description}</Option>
                  ))}
                </Select>
              )}
            </Form.Item>
            <Form.Item label="Date of Entry">
              {getFieldDecorator("DateofEntry", {
                rules: []
              })(<DatePicker format={dateFormat} />)}
            </Form.Item>
            <Form.Item label="Stay Until">
              {getFieldDecorator("Stayuntil", {
                rules: []
              })(<DatePicker format={dateFormat} />)}
            </Form.Item>
            <Form.Item label="Port of Entry">
              {getFieldDecorator("CheckpointV", {
                rules: [{}]
              })(
                <Select placeholder="Entry Port of Entry">
                  <Option value="">Select Port of Entry</Option>
                  {GPForm.entryPortList.map(item => (
                    <Option value={item.portCode}>{item.description}</Option>
                  ))}
                </Select>
              )}
            </Form.Item>
            <Form.Item label="Occupation">
              {getFieldDecorator("Occupation", {
                rules: [{}]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Place of Work">
              {getFieldDecorator("Placeofwork", {
                rules: [{}]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Blacklist">
              {getFieldDecorator("BlackList", {})(<Checkbox />)}
            </Form.Item>
            <Form.Item label="Black List Reason">
              {getFieldDecorator("BlackListReason", {})(<TextArea />)}
            </Form.Item>
          </Col>
        </Row>
      )}
    </Form>
  );
});

class GuestProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: newFields,
      isLoaded: false
    };
  }

  componentDidMount() {
    const id = this.props.location.pathname.split("/")[2];
    this.props.requestGPForm(id);
  }

  componentWillReceiveProps(nextProps) {
    const { isLoading, profile } = nextProps;
    if (!isLoading) {
      this.updateFields(profile);
      if (profile && profile.dateofbirth) {
        var dob = moment(profile.dateofbirth, "DD/MM/YYYY").toDate();
        age = moment().diff(dob, "years");
      }
    }
  }

  updateFields = data => {
    const id = this.props.location.pathname.split("/")[2];
    newFields = {
      Idg: {
        value: id
      },
      LastName: {
        value: data ? data.lastName : ""
      },
      FirstName: {
        value: data ? data.firstName : ""
      },
      Sex: {
        value: data ? data.sex : false
      },
      GTitleCode: {
        value: data ? data.gTitleCode : ""
      },
      VIPcode: {
        value: data ? data.viPcode : ""
      },
      LanguegeCode: {
        value: data ? data.languegeCode : ""
      },
      GCountryCode: {
        value: data ? data.gCountryCode : ""
      },
      NationalCode: {
        value: data ? data.nationalCode : ""
      },
      PostCode: {
        value: data ? data.postCode : ""
      },
      Passportypecode: {
        value: data ? data.passportypecode : ""
      },
      IDPassportNo: {
        value: data ? data.idPassportNo : ""
      },
      Dateofbirth: {
        value: data
          ? data.dateofbirth
            ? moment(data.dateofbirth, "DD/MM/YYYY")
            : ""
          : ""
      },
      Placeofbirth: {
        value: data ? data.placeofbirth : ""
      },
      Address1: {
        value: data ? data.address1 : ""
      },
      Address2: {
        value: data ? data.address2 : ""
      },
      DateofissueP: {
        value: data
          ? data.dateofissueP
            ? moment(data.dateofissueP, "DD/MM/YYYY")
            : ""
          : ""
      },
      PlaceofissueP: {
        value: data ? data.placeofissueP : ""
      },
      Dateofexpiry: {
        value: data
          ? data.dateofexpiry
            ? moment(data.dateofexpiry, "DD/MM/YYYY")
            : ""
          : ""
      },
      NoticeG: {
        value: data ? data.noticeG : ""
      },
      Mobi: {
        value: data ? data.mobi : ""
      },
      Tel: {
        value: data ? data.tel : ""
      },
      Email: {
        value: data ? data.email : ""
      },
      CompanyGuest: {
        value: data ? data.companyGuest : ""
      },
      CompanyAdd: {
        value: data ? data.companyAdd : ""
      },
      VATCode: {
        value: data ? data.vatCode : ""
      },
      CreditCardNum: {
        value: data ? data.creditCardNum : ""
      },
      CreditCardExpireTime: {
        value: data
          ? data.creditCardExpireTime
            ? moment(data.creditCardExpireTime, "DD/MM/YYYY")
            : ""
          : ""
      },
      CreditCardSecureCode: {
        value: data ? data.creditCardSecureCode : ""
      },
      Visatype: {
        value: data ? data.visatype : ""
      },
      VisaNo: {
        value: data ? data.visaNo : ""
      },
      DateofissueV: {
        value: data
          ? data.dateofissueV
            ? moment(data.dateofissueV, "DD/MM/YYYY")
            : ""
          : ""
      },
      DateofexpiryV: {
        value: data
          ? data.dateofexpiryV
            ? moment(data.dateofexpiryV, "DD/MM/YYYY")
            : ""
          : ""
      },
      PlaceofissueV: {
        value: data ? data.placeofissueV : ""
      },
      Entrypurpose: {
        value: data ? data.entrypurpose : ""
      },
      DateofEntry: {
        value: data
          ? data.dateofissueV
            ? moment(data.dateofEntry, "DD/MM/YYYY")
            : ""
          : ""
      },
      Stayuntil: {
        value: data
          ? data.stayuntil
            ? moment(data.stayuntil, "DD/MM/YYYY")
            : ""
          : ""
      },
      CheckpointV: {
        value: data ? data.checkpointV : ""
      },
      Occupation: {
        value: data ? data.occupation : ""
      },
      Placeofwork: {
        value: data ? data.placeofwork : ""
      },
      BlackList: {
        value: data ? data.blackList : false
      },
      BlackListReason: {
        value: data ? data.blackListReason : ""
      }
    };
    this.setState(({ fields }) => ({
      fields: { ...fields, ...newFields },
      isLoaded: true
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
        if (values.Dateofbirth) {
          values.Dateofbirth = values.Dateofbirth.format("DD/MM/YYYY");
        }
        if (values.DateofissueP) {
          values.DateofissueP = values.DateofissueP.format("DD/MM/YYYY");
        }
        if (values.CreditCardExpireTime) {
          values.CreditCardExpireTime = values.CreditCardExpireTime.format(
            "DD/MM/YYYY"
          );
        }
        if (values.Dateofexpiry) {
          values.Dateofexpiry = values.Dateofexpiry.format("DD/MM/YYYY");
        }
        if (values.DateofissueV) {
          values.DateofissueV = values.DateofissueV.format("DD/MM/YYYY");
        }
        if (values.DateofexpiryV) {
          values.DateofexpiryV = values.DateofexpiryV.format("DD/MM/YYYY");
        }
        if (values.DateofEntry) {
          values.DateofEntry = values.DateofEntry.format("DD/MM/YYYY");
        }
        if (values.Stayuntil) {
          values.Stayuntil = values.Stayuntil.format("DD/MM/YYYY");
        }
        console.log(values);
        this.props.saveProfile(values).then(res => {
          if (res === 200) {
            message.success("Profile is saved!");
          } else {
            message.error("Failed to save profile!");
          }
        });
      }
    });
  };

  render() {
    const { GPForm, profile } = this.props;
    const { isLoaded } = this.state;
    const fields = this.state.fields;
    return (
      <div>
        {isLoaded && (
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
        )}
      </div>
    );
  }
}

const MainForm = Form.create()(GuestProfile);

export default connect(
  state => state.guestProfile,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(MainForm);
