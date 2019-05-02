import * as dataService from "../services/DataService";

const requestGPFormType = "REQUEST_GP_FORM";
const receiveGPFormType = "RECEIVE_GP_FORM";

const initialState = { isLoading: false, isSaving: false };

export const actionCreators = {
  requestGPForm: (idr) => async dispatch => {
    dispatch({ type: requestGPFormType });
    const titleList = await dataService.get("api/api/category/getlisttitle");    
    const vipList = await dataService.get("api/api/category/getlistVip");
    const languageList = await dataService.get("api/api/category/getlistlanguage");
    const countryList = await dataService.get(
      "api/api/category/getlistcountry"
    );
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
      }
    });
  },
  saveProfile: (data) => async () => {
    const saveProfileRes = await dataService.post(
      "api/api/ProfileGuest/SaveProfile", data
    );
    console.log(saveProfileRes)
    return saveProfileRes.status;
  }
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
      GPForm: action.GPForm
    };
  }

  return state;
};
