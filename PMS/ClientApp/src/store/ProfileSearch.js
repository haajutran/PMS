import * as dataService from "../services/DataService";

const requestGuestProfilesType = "REQUEST_GUEST_PROFILES";
const receiveGuestProfilesType = "RECEIVE_GUEST_PROFILES";

const requestSearchGPFormType = "REQUEST_SEARCH_GP_FORM";
const receiveSearchGPFormType = "RECEIVE_SEARCH_GP_FORM";
const initialState = { isLoading: false };

export const actionCreators = {
  requestGuestProfiles: () => async dispatch => {
    dispatch({ type: requestGuestProfilesType });
    const url = "api/api/profileguest/getlistprofile";
    const res = await dataService.get(url);

    dispatch({ type: receiveGuestProfilesType, guestProfiles: res.data });
  },
  requestSearchForm: () => async dispatch => {
    dispatch({ type: requestSearchGPFormType });
    const vipList = await dataService.get("api/api/category/getlistVip");
    const countryList = await dataService.get(
      "api/api/category/getlistcountry"
    );
    // const res = await fetch("http://180.148.1.174/api/reports/getall");
    dispatch({
      type: receiveSearchGPFormType,
      searchGPForm: {
        vipList: vipList.data,
        countryList: countryList.data
      }
    });
  },
  search: fields => async dispatch => {
    dispatch({ type: requestGuestProfilesType });
    var keys = Object.keys(fields);
    var params = "";
    keys.forEach(key => {
      var value = fields[key];
      if (value) {
        params += "?" + key + "=" + value;
      }
    });
    // console.log(params);
    const url = "api/api/profileguest/getlistprofile";
    const res = await dataService.get(url + params);
    // const res = await fetch("http://180.148.1.174/api/reports/getall");
    dispatch({ type: receiveGuestProfilesType, guestProfiles: res.data });
    // console.log(aaa);
  }
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === requestGuestProfilesType) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (action.type === receiveGuestProfilesType) {
    return {
      ...state,
      guestProfiles: action.guestProfiles,
      isLoading: false
    };
  }

  if (action.type === requestSearchGPFormType) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (action.type === receiveSearchGPFormType) {
    return {
      ...state,
      searchGPForm: action.searchGPForm,
      isLoading: false
    };
  }

  return state;
};
