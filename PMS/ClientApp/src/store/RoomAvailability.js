import * as dataService from "../services/DataService";

const requestRoomsAvaiType = "REQUEST_ROOMS_AVAI";
const receiveRoomsAvaiType = "RECEIVE_ROOMS_AVAI";

const initialState = { isLoading: false };

export const actionCreators = {
  //   requestGuestProfiles: () => async dispatch => {
  //     dispatch({ type: requestGuestProfilesType });
  //     const url = "api/api/profileguest/getlistprofile";
  //     const res = await dataService.get(url);
  //     dispatch({ type: receiveGuestProfilesType, guestProfiles: res.data });
  //   },
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === requestRoomsAvaiType) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (action.type === receiveRoomsAvaiType) {
    return {
      ...state,
      //   guestProfiles: action.guestProfiles,
      isLoading: false
    };
  }

  return state;
};
