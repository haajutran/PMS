import * as dataService from "../services/DataService";

const requestFloorPlansType = "REQUEST_FLOOR_PLANS";
const receiveFloorPlansType = "RECEIVE_FLOOR_PLANS";

const initialState = { floorPlans: [], isLoading: false };

export const actionCreators = {
  requestFloorPlans: () => async dispatch => {
    dispatch({ type: requestFloorPlansType });
    const url = "api/api/roommap/getlistroom";
    const res = await dataService.get(url);
    // const res = await fetch("http://180.148.1.174/api/reports/getall");
    console.log(res);
    dispatch({ type: receiveFloorPlansType, floorPlans: res.data });
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

  return state;
};
