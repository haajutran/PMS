import * as dataService from "../services/DataService";
import moment from "moment";

const requestGPFormType = "REQUEST_GP_FORM";
const receiveGPFormType = "RECEIVE_GP_FORM";
const receiveGPFormFailedType = "RECEIVE_GP_FORM_Failed";

const initialState = { isLoading: false, isSaving: false, error: 0 };

export const actionCreators = {
  requestGPForm: id => async dispatch => {
    if (id) {
      const profileRes = await dataService.get(
        `api/api/ProfileGuest/profileinfor?id=${id}`
      );
      if (profileRes.status !== 200) {
        dispatch({ type: receiveGPFormFailedType, error: 400 });
      } else {
        getFormInfor(dispatch, profileRes.data);
      }
    } else {
      getFormInfor(dispatch, undefined);
    }
  },

  saveProfile: data => async () => {
    const saveProfileRes = await dataService.post(
      "api/api/ProfileGuest/SaveProfile",
      data
    );
    return saveProfileRes.status;
  }
};

export const getFormInfor = async (dispatch, data) => {
  dispatch({ type: requestGPFormType });
  const titleList = await dataService.get("api/api/category/getlisttitle");
  const vipList = await dataService.get("api/api/category/getlistVip");
  const languageList = await dataService.get(
    "api/api/category/getlistlanguage"
  );
  const countryList = await dataService.get("api/api/category/getlistcountry");
  const entryPurposeList = await dataService.get(
    "api/api/category/getListPorts"
  );
  const entryPortList = await dataService.get(
    "api/api/category/getListEntryport"
  );
  dispatch({
    type: receiveGPFormType,
    GPForm: {
      titleList: titleList.data,
      vipList: vipList.data,
      countryList: countryList.data,
      languageList: languageList.data,
      entryPurposeList: entryPurposeList.data,
      entryPortList: entryPortList.data
    },
    profile: data
  });
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === requestGPFormType) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (action.type === receiveGPFormType) {
    return {
      ...state,
      isLoading: false,
      GPForm: action.GPForm,
      profile: action.profile
    };
  }

  return state;
};
