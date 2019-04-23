import * as dataService from "../services/DataService";

const requestGPFormType = "REQUEST_GP_FORM";
const receiveGPFormType = "RECEIVE_GP_FORM";
const initialState = { isLoading: false };

export const actionCreators = {
  requestGPForm: () => async dispatch => {
    dispatch({ type: requestGPFormType });
    const titleList = await dataService.get("api/api/category/getlisttitle");    
    const vipList = await dataService.get("api/api/category/getlistVip");
    const languageList = await dataService.get("api/api/category/getlistlanguage");
    const countryList = await dataService.get(
      "api/api/category/getlistcountry"
    );
    dispatch({
      type: receiveGPFormType,
      GPForm: {
        titleList: titleList.data,
        vipList: vipList.data,
        countryList: countryList.data,
        languageList: languageList.data
      }
    });
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
