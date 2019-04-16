import * as dataService from "../services/DataService";

const requestFloorPlansType = "REQUEST_FLOOR_PLANS";
const receiveFloorPlansType = "RECEIVE_FLOOR_PLANS";

const requestSearchFormType = "REQUEST_SEARCH_FORM";
const receiveSearchFormType = "RECEIVE_SEARCH_FORM";

const initialState = { isLoading: false };

export const actionCreators = {
  requestFloorPlans: () => async dispatch => {
    dispatch({ type: requestFloorPlansType });
    const url = "api/api/roommap/getlistroom";
    const res = await dataService.get(url);
    // const res = await fetch("http://180.148.1.174/api/reports/getall");
    dispatch({ type: receiveFloorPlansType, floorPlans: res.data });
  },
  requestSearchForm: () => async dispatch => {
    dispatch({ type: requestSearchFormType });
    const listView = await dataService.get("api/api/category/getListWing");
    const listAttribute = await dataService.get(
      "api/api/category/getRoomAttribute"
    );
    const listFloor = await dataService.get("api/api/category/getListFloor");
    const listBuilding = await dataService.get(
      "api/api/category/getListBuilding"
    );
    // const res = await fetch("http://180.148.1.174/api/reports/getall");
    dispatch({
      type: receiveSearchFormType,
      searchForm: {
        listView: listView.data,
        listAttribute: listAttribute.data,
        listFloor: listFloor.data,
        listBuilding: listBuilding.data
      }
    });
  },
  search: fields => async dispatch => {
    dispatch({ type: requestFloorPlansType });
    var keys = Object.keys(fields);
    var params = "";
    keys.forEach(key => {
      var value = fields[key];
      if (value) {
        params += "?" + key + "=" + value;
      }
    });
    // console.log(params);
    const url = "api/api/roommap/getlistroom";
    const res = await dataService.get(url + params);
    // const res = await fetch("http://180.148.1.174/api/reports/getall");
    dispatch({ type: receiveFloorPlansType, floorPlans: res.data });
    // console.log(aaa);
  }
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === requestFloorPlansType) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (action.type === receiveFloorPlansType) {
    return {
      ...state,
      floorPlans: action.floorPlans,
      isLoading: false
    };
  }

  if (action.type === requestSearchFormType) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (action.type === receiveSearchFormType) {
    return {
      ...state,
      searchForm: action.searchForm,
      isLoading: false
    };
  }

  return state;
};
